'use strict';

const config = require('../config');
const db = require('../../models/db');

const devController = {
  //get bus routes and populate them
  populateBusRoutes: async function (ctx) {
    try {
      const response = await fetch(config.ctaBusURL + config.getBusRoutes + config.ctaBusKey + config.ctaBusJSON);
      const data = await response.json();
      //extracts just needed properties for each bus route
      const filteredData = manageRoutes(data);
      const newRoute = db.BusRoute;
      filteredData.forEach(async (route) => (
        await newRoute.create({
          routeID: route.routeID,
          routeName: route.routeName,
          routeColor: route.routeColor
        })
      ));
      ctx.body = filteredData;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  //get bus directions for each route and populate them
  populateBusDirections: async function (ctx) {
    try {
      //prepare routeIDs for API requests
      const busRouteArray = await db.BusRoute.findAll({
        attributes: ['routeID']
      });
      const mappedArray = busRouteArray.map(({ routeID }) => (routeID));
      const formattedArray = [];
      for (let i = 0; i < mappedArray.length; i++) {
        const response = await fetch(config.ctaBusURL + config.getBusDirections + config.ctaBusKey + config.busRouteAffix + mappedArray[i] + config.ctaBusJSON);
        const data = await response.json();
        const directionsArr = extractDirections(data);
        for (let j = 0; j < directionsArr.length; j++) {
          formattedArray.push({
            direction: directionsArr[j],
            routeID: mappedArray[i]
          });
        }
      }
      const newDirection = db.BusDirection;
      formattedArray.forEach(async (direction) => (
        await newDirection.create({
          direction: direction.direction,
          routeID: direction.routeID
        })
      ));
      ctx.body = formattedArray;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  populateBusStops: async function (ctx) {

  },
  //get train stations and populate them
  populateTrainStations: async function (ctx) {
    try {
      const response = await fetch(config.ctaDataURL);
      const data = await response.json();
      //filter out duplicate stops to return just needed properties of unique parent stations
      const filteredData = manageStations(data);
      const newStation = db.TrainStation;
      filteredData.forEach(async (station) => (
        await newStation.create({
          stationID: station.stationID,
          stationName: station.stationName
        })
      ));
      ctx.body = filteredData;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  //get train stops and populate them
  populateTrainStops: async function (ctx) {
    try {
      const response = await fetch(config.ctaDataURL);
      const data = await response.json();
      //extracts just needed properties of each child stop
      const filteredData = manageStops(data);
      const newStop = db.TrainStop;
      filteredData.forEach(async (stop) => (
        await newStop.create({
          stopID: stop.stopID,
          stopName: stop.stopName,
          direction: stop.direction,
          stationID: stop.stationID,
          red: stop.red,
          blue: stop.blue,
          g: stop.g,
          brn: stop.brn,
          p: stop.p,
          y: stop.y,
          pink: stop.pink,
          org: stop.org
        })
      ));
      ctx.body = filteredData;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
}

function manageRoutes (ctaData) {
  const { routes } = ctaData['bustime-response'];
  const filteredData = routes.map(({rt, rtnm, rtclr}) => ({
    routeID: rt,
    routeName: rtnm,
    routeColor: rtclr
  }));
  console.log(filteredData);
  return filteredData;
}

function extractDirections (ctaData) {
  const { directions } = ctaData['bustime-response'];
  const filteredDirections = directions.map(({dir}) => (dir));
  return filteredDirections;
}

function manageStations (ctaData) {
  const filteredData = ctaData.map(({map_id, station_descriptive_name}) => ({
    stationID: map_id,
    stationName: station_descriptive_name
  }));
  const reducedData = filteredData.reduce((prev, curr) => {
    const uniqueTest = prev.find(item => item.stationID === curr.stationID);
    if (!uniqueTest) {
      return prev.concat([curr]);
    } else {
      return prev;
    }
  }, []);
  return reducedData;
}

function manageStops (ctaData) {
  const filteredData = ctaData.map(({stop_id, stop_name, direction_id, map_id, red, blue, g, brn, p, y, pnk, o}) => ({
    stopID: stop_id,
    stopName: stop_name,
    direction: direction_id,
    stationID: map_id,
    red: red,
    blue: blue,
    g: g,
    brn: brn,
    p: p,
    y: y,
    pink: pnk,
    org: o
  }));
  return filteredData;
}

module.exports = devController;