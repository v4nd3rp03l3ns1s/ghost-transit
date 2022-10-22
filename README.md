
**---Station to Station---**

A mobile app for tracking bus and train arrival times on Chicago's CTA public-transit system.

![Selecting train stop from a given CTA station](client/assets/TrainSelect.png?raw=true "Train Screen")
![Accordion menu of CTA bus lines to choose from](client/assets/BusSelect.png?raw=true "Bus Screen")

**---Getting Started---**

**Back End**

*CTA Developer Access*

Running Station to Station requires a developer key for the CTA bus API (https://www.transitchicago.com/developers/bustracker/) as well as one for the CTA train API (https://www.transitchicago.com/developers/traintrackerapply/). These can be input into the server/controllers/config.js file.

*Running the Server*

Run server/index.js.

*Populating the Database*

To improve responsiveness and minimize API calls to CTA servers, Station to Station runs with a local database that contains bus and train route, station, and stop information. Use the functions in server/devUtility/devController.js to execute the necessary API calls to retrieve information from CTA and shape it appropriately for storage in a PostgreSQL database. The functions in this file can be executed top to bottom.

Finally, train line information may be put into the database based on the "trainLines" object found in server/controllers/config.js.

**Front End**

*Compiling App with Expo*
In the client folder, use the command "npx expo start" to compile the app with Expo. You can then use your preferred environment to run the app. (I recommend and used XCode: https://developer.apple.com/xcode/)

**---Tech Stack---**

React Native, Paper, Redux, Node, Koa, SQL, Postgres
