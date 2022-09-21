'use strict';

const fs = require('fs');
const user = require('./userSchema.js');
const Sequelize = require('sequelize');

const sequelizeConfig = {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
};

const sequelize = new Sequelize('station-to-station', 'postgres', 'postgres', sequelizeConfig);
const db = {};

const model = user(sequelize, Sequelize.DataTypes);
db[model.name] = model;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;