import { combineReducers } from 'redux';
//import actions
const {
  UPDATE_TRANSITTRAIN,
  UPDATE_TRANSITBUS,
} = require('../actions/transit');
const {
  UPDATE_TRAINLINE,
  UPDATE_TRAINSTATION,
  UPDATE_TRAINSTOP,
  UPDATE_STATIONLIST,
  UPDATE_STOPLIST,
  UPDATE_TRAINPREDICT,
} = require('../actions/train');

const train = (train = {
    trainLine: '',
    trainStation: '',
    trainStop: '',
    stationList: [],
    stopList: [],
    trainPrediction: '',
  },
  action
) => {
  switch (action.type) {
    case UPDATE_TRAINLINE:
      return { ...train, trainLine: action.trainLine };
    case UPDATE_TRAINSTATION:
      return { ...train, trainStation: action.trainStation };
    case UPDATE_TRAINSTOP:
      return { ...train, trainStop: action.trainStop };
    case UPDATE_STATIONLIST:
      return { ...train, stationList: action.trainStations };
    case UPDATE_STOPLIST:
      return { ...train, stopList: action.trainStops };
    case UPDATE_TRAINPREDICT:
      return { ...train, trainPrediction: action.trainPredict };
    default:
      return train;
  }
};
const transit = (transit = {
  mode: 'train',
  },
  action
) => {
  switch (action.type) {
    case UPDATE_TRANSITTRAIN:
      return { ...transit, mode: 'train' };
    case UPDATE_TRANSITBUS:
      return { ...transit, mode: 'bus'};
    default:
      return transit;
  }
};

export default combineReducers({ transit, train });
