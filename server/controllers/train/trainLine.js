'use strict';

const db = require('../../models/db');

const trainLineController = {
  //get a list of all train lines
  getAllTrainLines: async function (ctx) {
    try {
      const trainLineArray = await db.TrainLine.findAll({
        attributes: ['_id', 'lineName', 'trainColor']
      });
      ctx.body = trainLineArray;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  //get details for a single line
  getTrainLine: async function (ctx) {
    try {
      const trainLineResult = await db.TrainLine.findAll({
        attributes: ['_id', 'lineName', 'trainColor'],
        where: { lineName: ctx.query.ln }
      });
      ctx.body = trainLineResult
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
}

module.exports = trainLineController;