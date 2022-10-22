'use strict';

const controllerConfig = {
  //general bus API parameters
  ctaBusKey: '?key=[BUS DEVELOPER KEY]',
  ctaBusURL: 'http://www.ctabustracker.com/bustime/api/v2/',
  ctaBusJSON: '&format=json',

  //bus get commands
  getBusRoutes: 'getroutes',
  getBusDirections: 'getdirections',
  getBusStops: 'getstops',
  getBusPredictions: 'getpredictions',

  //bus parameter affixes
  busRouteAffix: '&rt=',
  busDirectionAffix: '&dir=',
  busStopAffix: '&stpid=',
  busMaxResultsAffix: '&top=',

  //general train API parameters
  ctaTrainKey: '?key=[TRAIN DEVELOPER KEY]',
  ctaTrainURL: 'http://lapi.transitchicago.com/api/1.0/',
  ctaTrainJSON: '&outputType=JSON',

  //train get commands
  getTrainArrivals: 'ttarrivals.aspx',

  //train parameter affixes
  trainStationAffix: '&mapid=',
  trainStopAffix: '&stpid=',
  trainMaxResultsAffix: '&max=',

  //ctaDataCenter APIs for train info
  ctaDataURL: 'https://data.cityofchicago.org/resource/8pix-ypme.json',

  //train lines array to enter into database
  trainLines: [
    {
      lineName: 'Red',
      trainColor: '#ff0000',
    },
    {
      lineName: 'Blue',
      trainColor: '#0080ff',
    },
    {
      lineName: 'Brn',
      trainColor: '#b37a4c',
    },
    {
      lineName: 'G',
      trainColor: '#03c04a',
    },
    {
      lineName: 'Org',
      trainColor: '#ed7014',
    },
    {
      lineName: 'P',
      trainColor: '#a32cc4',
    },
    {
      lineName: 'Pink',
      trainColor: '#f699cd',
    },
    {
      lineName: 'Y',
      trainColor: '#ffcc00',
    },
  ]
}

module.exports = controllerConfig;