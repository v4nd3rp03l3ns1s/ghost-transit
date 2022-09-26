
export const UPDATE_TRAINLINE = 'UPDATE_TRAINLINE';
export const UPDATE_TRAINSTATION = 'UPDATE_TRAINSTATION';
export const UPDATE_TRAINSTOP = 'UPDATE_TRAINSTOP';
export const UPDATE_STATIONLIST = 'UPDATE_TRAINSTATIONLIST';
export const UPDATE_STOPLIST = 'UPDATE_TRAINSTOPLIST';
export const UPDATE_TRAINPREDICT = 'UPDTATE_TRAINPREDICTION';

export const updateTrainLine = (trainLine) => ({
  type: UPDATE_TRAINLINE,
  trainLine,
});
export const updateTrainStation = (trainStation) => ({
  type: UPDATE_TRAINSTATION,
  trainStation,
});
export const updateTrainStop = (trainStop) => ({
  type: UPDATE_TRAINSTOP,
  trainStop,
});
export const updateStationList = (trainStations) => ({
  type: UPDATE_STATIONLIST,
  trainStations,
});
export const updateStopList = (trainStops) => ({
  type: UPDATE_STOPLIST,
  trainStops,
});
export const updateTrainPredict = (trainPredict) => ({
  type: UPDATE_TRAINPREDICT,
  trainPredict,
});
