
export const UPDATE_TRAINLINE = 'UPDATE_TRAINLINE';
export const UPDATE_STATIONLIST = 'UPDATE_TRAINSTATIONLIST'

export const updateTrainLine = (trainLine) => ({
  type: UPDATE_TRAINLINE,
  trainLine,
});

export const updateStationList = (trainStations) => ({
  type: UPDATE_STATIONLIST,
  trainStations,
});
