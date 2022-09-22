'use strict';

const { response } = require('express');
const { CITEXT } = require('sequelize');
const config = require('../config');

const devController = {
  //get train stations/stops and populate them
  populateTrains: async function () {
    try {
      const response = await fetch(config.populateTrains);
      const data = await response.json();

      ctx.body = '';
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }


  //send


}



module.exports = devController;