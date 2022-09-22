'use strict';

const Router = require('koa-router');

//import controllers
const devController = require('../controllers/devUtility/devController');

//initialize all routers
const rootRouter = new Router();

//dev routes
rootRouter.get('/dev/populateTrainStations', devController.populateTrainStations);
rootRouter.get('/dev/populateTrainStops', devController.populateTrainStops);

// rootRouter.use('/', devRouter.routes());

module.exports = { rootRouter };