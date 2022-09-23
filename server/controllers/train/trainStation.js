'use strict';

const db = require('../../models/db');
const filterStops = require('../../middleware/trainStopFilter');

const trainStationController = {
  //get train stations on a given train line
  getLineStations: async function (ctx) {
    try {
      const lineColor = ctx.query.ln;
      const trainStopsResult = await db.TrainStop.findAll();
      //filters for the given line
      const filteredStops = filterStops(trainStopsResult, lineColor);
      //removes duplicates
      const reducedStops = filteredStops.reduce((prev, curr) => {
        const uniqueTest = prev.find(item => item.stationID === curr.stationID);
        if (!uniqueTest) {
          return prev.concat([curr]);
        } else {
          return prev;
        }
      }, []);
      //queries for station details
      const stationArray = [];
      for (let i = 0; i < reducedStops.length; i++) {
        const { stationID } = reducedStops[i];
        const stationInfo = await db.TrainStation.findAll({
          where: { stationID: stationID}
        });
        const cleanedStation = stationInfo.map(({_id, stationID, stationName}) => ({
          _id: _id,
          stationID: stationID,
          stationName: stationName
        }));
        stationArray.push(cleanedStation[0]);
      }
      console.log(stationArray);
      ctx.body = stationArray;
      ctx.status = 200;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
}

module.exports = trainStationController;