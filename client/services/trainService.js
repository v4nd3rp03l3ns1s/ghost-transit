
const config = require('../config');
const baseURL = config.serverURL;

export const trainService = {
  getTrainLines: async function () {
    try {
      console.log('inside trainLines service start');
      const response = await fetch(`${baseURL}/train/getAllTrainLines`);
      const json = await response.json();
      const cleanedLines = json.map(({ _id, lineName, trainColor }) => ({
        _id: _id,
        lineName: lineName,
        trainColor: trainColor,
      }));
      const explicatedLines = explicateLines(cleanedLines);
      console.log(explicatedLines);
      return explicatedLines;
    } catch (err) {
      console.log('services error', err);
    }
  },
  getTrainStations: async function (line) {
    return fetch(`${baseURL}/train/getLineStations?ln=${line}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => err);
  },
  getTrainStops: async function (line) {
    return fetch(`${baseURL}/train/getLineStops?ln=${line}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => err);
  },
  getTrainPredict: function () {
    return null;
  },
};

function explicateLines(lineData) {
  const resultData = lineData.map((line) => {
    switch (line.lineName) {
      case 'Red':
        return {
          _id: line._id,
          lineName: line.lineName,
          trainColor: line.trainColor,
          fullName: 'Red Line',
        };
      case 'Blue':
        return {
          _id: line._id,
          lineName: line.lineName,
          trainColor: line.trainColor,
          fullName: 'Blue Line',
        };
      case 'Brn':
        return {
          _id: line._id,
          lineName: line.lineName,
          trainColor: line.trainColor,
          fullName: 'Brown Line',
        };
      case 'G':
        return {
          _id: line._id,
          lineName: line.lineName,
          trainColor: line.trainColor,
          fullName: 'Green Line',
        };
      case 'Org':
        return {
          _id: line._id,
          lineName: line.lineName,
          trainColor: line.trainColor,
          fullName: 'Orange Line',
        };
      case 'P':
        return {
          _id: line._id,
          lineName: line.lineName,
          trainColor: line.trainColor,
          fullName: 'Purple Line',
        };
      case 'Pink':
        return {
          _id: line._id,
          lineName: line.lineName,
          trainColor: line.trainColor,
          fullName: 'Pink Line',
        };
      case 'Y':
        return {
          _id: line._id,
          lineName: line.lineName,
          trainColor: line.trainColor,
          fullName: 'Yellow Line',
        };
    }
  });
  return resultData;
}
