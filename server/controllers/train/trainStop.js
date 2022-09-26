'use strict';

const db = require('../../models/db');
const config = require('../config');
const filterStops = require('../../middleware/trainStopFilter');

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

module.exports = trainStopController;