'use strict';

const db = require('../../models/db');

const busRouteController = {
  //get a list of all bus routes
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
  //get details for a single route with routeID
  getBusRoute: async function (ctx) {
    try {
      const busRouteResult = await db.BusRoute.findAll({
        attributes: ['routeID', 'routeName', 'routeColor'],
        where: { routeID: ctx.query.rt }
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