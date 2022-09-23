'use strict';

const config = require('../config');
const db = require('../../models/db');

const busStopController = {
  //get a list of stops on a given bus route + direction
  getRouteStops: async function (ctx) {
    try {
      const busStopsResult = await db.BusStop.findAll({
        attributes: ['_id', 'stopID', 'stopName', 'direction_id', 'routeID'],
        where: {
          routeID: ctx.query.rt,
          direction_id: ctx.query.dir
        }
      });
      ctx.body = busStopsResult
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  //get predicted bus arrivals for a given stop
  getBusTimes: async function (ctx) {
    try {
      const response = await fetch(config.ctaBusURL + config.getBusPredictions + config.ctaBusKey + config.busRouteAffix + ctx.query.rt + config.busStopAffix + ctx.query.stp + config.ctaBusJSON);
      const data = await response.json();
      //simplify and reformat data from API call
      const busArrivals = cleanTimes(data);
      ctx.body = busArrivals
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
}

module.exports = busStopController;

function cleanTimes (data) {
  const { prd } = data['bustime-response'];
  const cleanedTimes = prd.map(({vid, prdctdn}) => ({
    vehicleID: vid,
    countdown: prdctdn
  }))
  return cleanedTimes;
}


