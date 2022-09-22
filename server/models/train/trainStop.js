'use strict';

module.exports = (sequelize, DataTypes) => {
  const TrainStop = sequelize.define('TrainStop', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    stopID: DataTypes.TEXT,
    stopName: DataTypes.TEXT,
    direction: DataTypes.TEXT,
    stationID: DataTypes.TEXT,
  });

  TrainStop.associate = db => {
    db.TrainStop.belongsTo(db.TrainStation, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.TrainStop.hasMany(db.UserTrain, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };

  return TrainStop;
};