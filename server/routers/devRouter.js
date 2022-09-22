'use strict';

// const Router = require('koa-router');
const devController = require('../controllers/devUtility/devController');

// const devRouter = new Router();
const { devRouter } = require('./index')

devRouter.get('/populateTrains/', devController.populateTrains);
