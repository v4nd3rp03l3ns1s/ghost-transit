'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config');

const sequelizeConfig = {
  host: config.dbHost,
  dialect: 'postgres',
  logging: false
};

const sequelize = new Sequelize('StationToStation', config.dbUser, config.dbPassword, sequelizeConfig);
const db = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.js' && file !== 'db.js') {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;