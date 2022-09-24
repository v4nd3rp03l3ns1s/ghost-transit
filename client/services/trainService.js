
const config = require('../config');
const baseURL = config.serverURL;

export const trainService = {
  getTrainLines: async function () {
    return fetch(`${baseURL}/train/getAllTrainLines`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => err);
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
