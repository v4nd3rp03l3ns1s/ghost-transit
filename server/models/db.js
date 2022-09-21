'use strict';

const mongoose = require('mongoose');
//task: hide this url in an env
const url = 'mongodb://localhost:27017/ghost-transit';

mongoose.connect(url);
const db = mongoose.connection;
console.log(mongoose.connection.readystate, 'Mongoose is a go!');

module.exports = db;