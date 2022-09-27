export const UPDATE_BUSROUTE = 'UPDATE_BUSROUTE';
export const UPDATE_BUSDIRECTION = 'UPDATE_BUSDIRECTION';
export const UPDATE_BUSSTOP = 'UPDATE_BUSSTOP';
export const UPDATE_DIRECTIONLIST = 'UPDATE_DIRECTIONLIST';
export const UPDATE_BUSSTOPLIST = 'UPDATE_BUSSTOPLIST';
export const UPDATE_BUSPREDICT = 'UPDATE_BUSPREDICT';

export const updateBusRoute = (busRoute) => ({
  type: UPDATE_BUSROUTE,
  busRoute,
});
export const updateBusDirection = (busDirection) => ({
  type: UPDATE_BUSDIRECTION,
  busDirection,
});
export const updateBusStop = (busStop) => ({
  type: UPDATE_BUSSTOP,
  busStop,
});
export const updateDirectionList = (busDirections) => ({
  type: UPDATE_DIRECTIONLIST,
  busDirections,
});
export const updateBusStopList = (busStops) => ({
  type: UPDATE_BUSSTOPLIST,
  busStops,
});
export const updateBusPredict = (busPredict) => ({
  type: UPDATE_BUSPREDICT,
  busPredict,
});