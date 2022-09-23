'use strict';

function filterStops (data, color) {
  //remove non-matching colors
  switch(color.toLowerCase()) {
    case 'red':
      const redStops = data.filter((stop) => {
        return stop['red'];
      });
      const cleanedRedStops = redStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'red'
      }))
      return cleanedRedStops;
    case 'blue':
      const blueStops = data.filter((stop) => {
        return stop['blue'];
      });
      const cleanedBlueStops = blueStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'blue'
      }))
      return cleanedBlueStops;
    case 'brn':
      const brnStops = data.filter((stop) => {
        return stop['brn'];
      });
      const cleanedBrnStops = brnStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'brn'
      }))
      return cleanedBrnStops;
     case 'g':
      const gStops = data.filter((stop) => {
        return stop['g'];
      });
      const cleanedGStops = gStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'g'
      }))
      return cleanedGStops;
    case 'org':
        const orgStops = data.filter((stop) => {
          return stop['org'];
        });
        const cleanedOrgStops = orgStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
          _id: _id,
          stopID: stopID,
          stopName: stopName,
          direction: direction,
          stationID: stationID,
          trainLine: 'org'
        }))
        return cleanedOrgStops;
    case 'p':
      const pStops = data.filter((stop) => {
        return stop['p'];
      });
      const cleanedPStops = pStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'p'
      }))
      return cleanedPStops;
    case 'pink':
      const pinkStops = data.filter((stop) => {
        return stop['pink'];
      });
      const cleanedPinkStops = pinkStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'pink'
      }))
      return cleanedPinkStops;
    case 'y':
      const yStops = data.filter((stop) => {
        return stop['y'];
      });
      const cleanedYStops = yStops.map(({ _id, stopID, stopName, direction, stationID }) => ({
        _id: _id,
        stopID: stopID,
        stopName: stopName,
        direction: direction,
        stationID: stationID,
        trainLine: 'y'
      }))
      return cleanedYStops;
  }
}

module.exports = filterStops;