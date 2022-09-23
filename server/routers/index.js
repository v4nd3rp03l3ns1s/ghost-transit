'use strict';

const Router = require('koa-router');

//import controllers
const devController = require('../controllers/devUtility/devController');
const busRouteController = require('../controllers/bus/busRoute');
const busDirectionController = require('../controllers/bus/busDirection');
const busStopController = require('../controllers/bus/busStop');
const trainLineController = require('../controllers/train/trainLine');
const trainStopController = require('../controllers/train/trainStop');

//initialize all routers
const router = new Router();

//user routes

//bus routes
router.get('/bus/getAllBusRoutes', busRouteController.getAllBusRoutes);
router.get('/bus/getBusRoute', busRouteController.getBusRoute);
router.get('/bus/getRouteDirections', busDirectionController.getRouteDirections);
router.get('/bus/getRouteStops', busStopController.getRouteStops);
router.get('/bus/getBusTimes', busStopController.getBusTimes);

//train routes
router.get('/train/getAllTrainLines', trainLineController.getAllTrainLines);
router.get('/train/getTrainLine', trainLineController.getTrainLine);
router.get('/train/getLineStops', trainStopController.getLineStops);
router.get('/train/getTrainTimes', trainStopController.getTrainTimes);

//dev routes used to populate db
// router.get('/dev/populateTrainStations', devController.populateTrainStations);
// router.get('/dev/populateTrainStops', devController.populateTrainStops);
// router.get('/dev/populateBusRoutes', devController.populateBusRoutes);
// router.get('/dev/populateBusDirections', devController.populateBusDirections);
// router.get('/dev/populateBusStops', devController.populateBusStops);


module.exports = { router };