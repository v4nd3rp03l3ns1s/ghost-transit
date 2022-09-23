'use strict';

module.exports = (sequelize, DataTypes) => {
  const TrainStation = sequelize.define('TrainStation', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    stationID: DataTypes.BIGINT,
    stationName: DataTypes.TEXT
  });

  TrainStation.associate = db => {
    db.TrainStation.hasMany(db.TrainLineToStation, {
      onDelete: "CASCADE",
      foreignKey: 'stationID'
    });
    db.TrainStation.hasMany(db.TrainStop, {
      onDelete: "CASCADE",
      foreignKey: 'stationID'
    });
  };

  return TrainStation;
};