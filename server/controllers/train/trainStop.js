'use strict';

const db = require('../../models/db');
const config = require('../config');

const trainStopController = {
  //get all stops from a given train line
  getLineStops: async function (ctx) {
    try {
      const lineColor = ctx.query.ln
      const trainStopsResult = await db.TrainStop.findAll();
      //filters for the given line
      const filteredStops = filterStops(trainStopsResult, lineColor);
      ctx.body = filteredStops
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  //get predicted train arrivals for a given stop
  getTrainTimes: async function (ctx) {
    try {
      console.log(config.ctaTrainURL + config.getTrainArrivals + config.ctaTrainKey + config.trainStopAffix + ctx.query.stp + config.ctaTrainJSON);
      const response = await fetch(config.ctaTrainURL + config.getTrainArrivals + config.ctaTrainKey + config.trainStopAffix + ctx.query.stp + config.ctaTrainJSON);
      const data = await response.json();
      console.log(data);
      //simplify and reformat data from API call
      const trainArrivals = cleanTimes(data);
      ctx.body = trainArrivals
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
}

function cleanTimes (data) {
  const { eta } = data['ctatt']
  const cleanedTimes = eta.map(({rn, arrT}) => ({
    runID: rn,
    countdown: arrT
  }))
  return cleanedTimes;
}

function filterStops (data, color) {
  //remove non-matching colors
  switch(color.toLowerCase()) {
    case 'red':
      const redStops = data.filter((stop) => {
        return stop['red'];
      });
      const cleanedRedStops = redStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'red'
      }))
      return cleanedRedStops;
    case 'blue':
      const blueStops = data.filter((stop) => {
        return stop['blue'];
      });
      const cleanedBlueStops = blueStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'blue'
      }))
      return cleanedBlueStops;
    case 'brn':
      const brnStops = data.filter((stop) => {
        return stop['brn'];
      });
      const cleanedBrnStops = brnStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'brn'
      }))
      return cleanedBrnStops;
     case 'g':
      const gStops = data.filter((stop) => {
        return stop['g'];
      });
      const cleanedGStops = gStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'g'
      }))
      return cleanedGStops;
    case 'org':
        const orgStops = data.filter((stop) => {
          return stop['org'];
        });
        const cleanedOrgStops = orgStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
          _id: _id,
          stopID: stopID,
          stopName: stopName,
          direction: direction,
          stationID: stationID,
          trainLine: 'org'
        }))
        return cleanedOrgStops;
    case 'p':
      const pStops = data.filter((stop) => {
        return stop['p'];
      });
      const cleanedPStops = pStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'p'
      }))
      return cleanedPStops;
    case 'pink':
      const pinkStops = data.filter((stop) => {
        return stop['pink'];
      });
      const cleanedPinkStops = pinkStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'pink'
      }))
      return cleanedPinkStops;
    case 'y':
      const yStops = data.filter((stop) => {
        return stop['y'];
      });
      const cleanedYStops = yStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'y'
      }))
      return cleanedYStops;
  }
}


module.exports = trainStopController;