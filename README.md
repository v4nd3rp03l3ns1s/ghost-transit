
**---Station to Station---**

A mobile app for tracking bus and train arrival times on Chicago's CTA public-transit system.

**---Getting Started---**

*CTA Developer Access*

Running Station to Station requires a developer key for the CTA bus API (https://www.transitchicago.com/developers/bustracker/) as well as one for the CTA train API (https://www.transitchicago.com/developers/traintrackerapply/). These can be input into the server/controllers/config.js file.

*Populating the Database*

To improve responsiveness and minimize API calls to CTA servers, Station to Station runs with a local database that contains bus and train route, station, and stop information. Use the functions in server/devUtility/devController.js to execute the necessary API calls to retrieve information from CTA and shape it appropriately for storage in a PostgreSQL database.

Dev Utility Function Checklist:

1) populateBusRoutes
2) populateBusDirections
3) populateBusStops (You may need to process CTA's bus stop array in segments depending on your setup)
4) populateTrainStations
5) populateTrainStops

Finally, train line information may be put into the database based on the "trainLines" object found in server/controllers/config.js.

*Compiling App with Expo*

**---Tech Stack---**

React Native, Paper, Redux, Node, Koa, SQL, Postgres
