'use strict';

const config = require('../config');
const db = require('../../models/db');

const devController = {
  //get bus routes and populate them
  populateBusRoutes: async function (ctx) {
    try {
      //API request for all possible bus routes
      const response = await fetch(config.ctaBusURL + config.getBusRoutes + config.ctaBusKey + config.ctaBusJSON);
      const data = await response.json();
      //extracts just needed properties for each bus route
      const filteredData = manageRoutes(data);
      const newRoute = db.BusRoute;
      //creates each bus route on the db
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
        //API request to get possible directions for the given routeID
        const response = await fetch(config.ctaBusURL + config.getBusDirections + config.ctaBusKey + config.busRouteAffix + mappedArray[i] + config.ctaBusJSON);
        const data = await response.json();
        //cleans up the data object into arrays with needed info
        const directionsArr = extractDirections(data);
        for (let j = 0; j < directionsArr.length; j++) {
          formattedArray.push({
            direction: directionsArr[j],
            routeID: mappedArray[i]
          });
        }
      }
      //creates each bus route-direction permutation on the db
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
  //get bus stops and populate them to db
  populateBusStops: async function (ctx) {
    try {
      //prepare route and dir IDs for API requests
      const busDirArray = await db.BusDirection.findAll({
        attributes: ['routeID', 'direction', '_id']
      });
      const mappedArray = busDirArray.map(({ routeID, direction, _id }) => ({
        routeID: routeID,
        direction: direction,
        _id: _id
      }));
      const formattedArray = [];
      //this loop is very large; i needed to execute it in chunks
      for (let i = 0; i < mappedArray.length; i++) {
        //API request to get possible directions for the given routeID
        const response = await fetch(config.ctaBusURL + config.getBusStops + config.ctaBusKey + config.busRouteAffix + mappedArray[i]['routeID'] + config.busDirectionAffix + mappedArray[i]['direction'] + config.ctaBusJSON);
        const data = await response.json();
        //cleans up the data object into arrays with needed info
        const stopsArr = extractStops(data);
        for (let j = 0; j < stopsArr.length; j++) {
          formattedArray.push({
            stopID: stopsArr[j]['stopID'],
            stopName: stopsArr[j]['stopName'],
            routeID: mappedArray[i]['routeID'],
            direction_id: mappedArray[i]['_id']
          })
        }
      }
      const newBusStop = db.BusStop;
      formattedArray.forEach(async (stop) => (
        await newBusStop.create({
          stopID: stop.stopID,
          stopName: stop.stopName,
          routeID: stop.routeID,
          direction_id: stop.direction_id
        })
      ));
      ctx.body = formattedArray;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  //get train stations and populate them to db
  populateTrainStations: async function (ctx) {
    try {
      //API request for all possible train stations and stops
      const response = await fetch(config.ctaDataURL);
      const data = await response.json();
      //filter out duplicate stops to return just needed properties of unique parent stations
      const filteredData = manageStations(data);
      const newStation = db.TrainStation;
      //creates each station on the db
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
      //API request for all possible train stations and stops
      const response = await fetch(config.ctaDataURL);
      const data = await response.json();
      //extracts just needed properties of each child stop (i.e., a given platform at station)
      const filteredData = manageStops(data);
      const newStop = db.TrainStop;
      //creates each stop on the db
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

//function to turn route data into formatted array of objects
function manageRoutes (ctaData) {
  const { routes } = ctaData['bustime-response'];
  const filteredData = routes.map(({ rt, rtnm, rtclr }) => ({
    routeID: rt,
    routeName: rtnm,
    routeColor: rtclr
  }));
  console.log(filteredData);
  return filteredData;
}

//function to turn a given route's direction data into formatted array
function extractDirections (ctaData) {
  const { directions } = ctaData['bustime-response'];
  const filteredDirections = directions.map(({ dir }) => (dir));
  return filteredDirections;
}

//function to turn a given route-direction's data into a formatted array
function extractStops (ctaData) {
  const { stops } = ctaData['bustime-response'];
  const filteredStops = stops.map(({ stpid, stpnm }) => ({
    stopID: stpid,
    stopName: stpnm
  }))
  return filteredStops;
}

//function to turn station data into a formatted array and then remove duplicates to isolate parent stations
function manageStations (ctaData) {
  const filteredData = ctaData.map(({ map_id, station_descriptive_name }) => ({
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

//function to turn stop data into formatted array of objects
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