'use strict';

const config = require('../config');
const db = require('../../models/db');

const devController = {
  //get train stations/stops and populate them
  populateTrainStations: async function (ctx) {
    try {
      const response = await fetch(config.ctaDataURL);
      const data = await response.json();
      const filteredData = manageStations(data);
      const newStation = db.TrainStation;
      filteredData.forEach(async (station) => (
        await newStation.create({
          stationID: station.stationID,
          stationName: station.stationName
        })
      ));
      ctx.body = filteredData;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  populateTrainStops: async function (ctx) {
    try {
      const response = await fetch(config.ctaDataURL);
      const data = await response.json();
      const filteredData = manageStops(data);
      // const newStop = db.TrainStop;
      // filteredData.forEach(async (stop) => (
      //   await newStop.create({stop})
      // ));
      filteredData.forEach(async (stop) => (
        addStop(stop.stationID, {
          stopID: stop.stopID,
          stopName: stop.stopName,
          direction: stop.direction,
          stationID: stop.stationID
        })
      ));
      ctx.body = filteredData;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
}

function manageStations (ctaData) {
  const filteredData = ctaData.map(({map_id, station_descriptive_name}) => ({
    stationID: map_id,
    stationName: station_descriptive_name
  }));
  const reducedData = filteredData.reduce((prev, curr) => {
    const uniqueTest = prev.find(item => item.stationID === curr.stationID);
    if (!uniqueTest) {
      return prev.concat([curr]);
    } else {
      return prev;
    }
  }, []);
  return reducedData;
}

function manageStops (ctaData) {
  const filteredData = ctaData.map(({stop_id, stop_name, direction_id, map_id}) => ({
   stopID: stop_id,
   stopName: stop_name,
   direction: direction_id,
   stationID: map_id
  }));
  return filteredData;
}

async function addStop(stationID, modelObject) {
  const parentStation = await db.TrainStation.findOne({where: {stationID: stationID}});
  const newStop = db.TrainStop;
  const addedStop = await newStop.create(modelObject);
  addedStop.setUser(parentStation);
}


module.exports = devController;