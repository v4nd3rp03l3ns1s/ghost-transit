import { combineReducers } from 'redux';
//import actions
const { UPDATE_TRAINLINE } = require('../actions/train');

const trainLine = (trainLine = { trainLine: '' }, action) => {
  switch (action.type) {
    case UPDATE_TRAINLINE:
      return { trainLine: action.trainLine };
    default:
      return trainLine;
  }
};

export default combineReducers({ trainLine });
