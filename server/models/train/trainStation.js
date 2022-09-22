'use strict';

module.exports = (sequelize, DataTypes) => {
  const TrainStation = sequelize.define('TrainStation', {
    //autogen a sequential id?
    stationID: DataTypes.TEXT,
    stationName: DataTypes.TEXT
  });

  TrainStation.associate = db => {
    db.TrainStation.hasMany(db.TrainLineToStation, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.TrainStation.hasMany(db.TrainStop, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };

  return TrainStation;
};