'use strict';

module.exports = (sequelize, DataTypes) => {
  const TrainLineToStation = sequelize.define('TrainLineToStation', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });

  TrainLineToStation.associate = db => {
    db.TrainLineToStation.belongsTo(db.TrainLine, {
      onDelete: "CASCADE",
      foreignKey: 'lineName',
      targetKey: 'lineName'
    });
    db.TrainLineToStation.belongsTo(db.TrainStation, {
      onDelete: "CASCADE",
      foreignKey: 'stationID',
      targetKey: 'stationID'
    });
  };

  return TrainLineToStation;
};