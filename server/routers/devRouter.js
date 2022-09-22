'use strict';

const Router = require('koa-router');
const devController = require('../controllers/devUtility/devController');

const devRouter = new Router();

devRouter.get('/populateTrains/', devController.populateTrains);

exports.devRouter = devRouter;