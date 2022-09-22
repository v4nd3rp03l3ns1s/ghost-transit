'use strict';

module.exports = (sequelize, DataTypes) => {
  const TrainStation = sequelize.define('TrainStation', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    stationID: DataTypes.TEXT,
    stationName: DataTypes.TEXT
  });

  TrainStation.associate = db => {
    db.TrainStation.hasMany(db.TrainLineToStation, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: true }
    });
    db.TrainStation.hasMany(db.TrainStop, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: true }
    });
  };

  return TrainStation;
};