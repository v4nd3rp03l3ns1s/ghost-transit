'use strict';

const config = require('../config');
const db = require('../../models/db');

//get a list of all bus routes

const busRouteController = {
  getAllBusRoutes: async function (ctx) {
    try {
      const busRouteArray = await db.BusRoute.findAll({
        attributes: ['routeID', 'routeName', 'routeColor']
      });
      ctx.body = busRouteArray;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  getBusRoute: async function (ctx) {
    try {
      console.log(ctx.query);
      const busRouteResult = await db.BusRoute.findAll({
        attributes: ['routeID', 'routeName', 'routeColor'],
        where: {routeID: ctx.query.rt}
      });
      ctx.body = busRouteResult
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
}

module.exports = busRouteController;