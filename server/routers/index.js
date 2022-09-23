'use strict';

const Router = require('koa-router');

//import controllers
const devController = require('../controllers/devUtility/devController');

//initialize all routers
const router = new Router();

//dev routes
router.get('/dev/populateTrainStations', devController.populateTrainStations);
router.get('/dev/populateTrainStops', devController.populateTrainStops);
router.get('/dev/populateBusRoutes', devController.populateBusRoutes);
router.get('/dev/populateBusDirections', devController.populateBusDirections);
router.get('/dev/populateBusStops', devController.populateBusStops);

// rootRouter.use('/', devRouter.routes());

module.exports = { router };