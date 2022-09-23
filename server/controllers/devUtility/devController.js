'use strict';

const config = require('../config');
const db = require('../../models/db');

const devController = {
  populateBusRoutes: async function (ctx) {
    try {
      console.log('in function');
      const response = await fetch(config.ctaBusURL + config.getBusRoutes + config.ctaBusKey + config.ctaBusJSON);
      const data = await response.json();
      //extracts just needed properties for each bus route
      const filteredData = manageRoutes(data);
      const newRoute = db.BusRoute;
      console.log(filteredData);
      console.log(newRoute);
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
  populateBusDirections: async function (ctx) {

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
          // TrainStationId: stop.stationID,
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