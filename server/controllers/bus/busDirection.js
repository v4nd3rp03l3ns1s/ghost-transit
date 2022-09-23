'use strict';

const db = require('../../models/db');

const busDirectionController = {
  //get directions for a given routeID
  getRouteDirections: async function (ctx) {
    try {
      const busDirResult = await db.BusDirection.findAll({
        attributes: ['_id', 'direction', 'routeID'],
        where: {routeID: ctx.query.rt}
      });
      ctx.body = busDirResult
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
}

module.exports = busDirectionController;