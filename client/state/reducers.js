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
const {
  UPDATE_BUSROUTE,
  UPDATE_BUSDIRECTION,
  UPDATE_BUSSTOP,
  UPDATE_DIRECTIONLIST,
  UPDATE_BUSSTOPLIST,
  UPDATE_BUSPREDICT,
} = require('../actions/bus');

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
const bus = (bus = {
    busRoute: '',
    busDirection: '',
    busStop: '',
    directionList: [],
    busStopList: [],
    busPrediction: '',
  },
  action
) => {
  switch (action.type) {
    case UPDATE_BUSROUTE:
      return { ...bus, busRoute: action.busRoute };
    case UPDATE_BUSDIRECTION:
      return { ...bus, busDirection: action.busDirection };
    case UPDATE_BUSSTOP:
      return { ...bus, busStop: action.busStop };
    case UPDATE_DIRECTIONLIST:
      return { ...bus, directionList: action.busDirections };
    case UPDATE_BUSSTOPLIST:
      return { ...bus, busStopList: action.busStops };
    case UPDATE_BUSPREDICT:
      return { ...bus, busPrediction: action.busPredict };
    default:
      return bus;
  }
};

export default combineReducers({ transit, train, bus });
