import { combineReducers } from 'redux';
//import actions
const { UPDATE_TRAINLINE, UPDATE_TRAINSTATION, UPDATE_TRAINSTOP, UPDATE_STATIONLIST, UPDATE_STOPLIST } = require('../actions/train');

const train = (train = {
    trainLine: '',
    trainStation: '',
    trainStop: '',
    stationList: [],
    stopList: [],
  },
  action
) => {
  switch (action.type) {
    case UPDATE_TRAINLINE:
      console.log('update_trainline', action.trainLine);
      train.trainLine = action.trainLine;
      return { train };
    case UPDATE_TRAINSTATION:
      console.log('update_trainStation', action.trainStation);
      return { train };
    case UPDATE_TRAINSTOP:
      return { train };
    case UPDATE_STATIONLIST:
      console.log('update_stationlist', action.trainStations);
      // train.stationList = action.trainStations;
      return { ...train, stationList: action.trainStations };
    case UPDATE_STOPLIST:
      return { train };
    default:
      return train;
  }
};

export default combineReducers({ train });
