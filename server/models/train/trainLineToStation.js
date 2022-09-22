'use strict';

module.exports = (sequelize, DataTypes) => {
  const TrainLineToStation = sequelize.define('TrainLineToStation', {
    //autogen a sequential id?
  });

  TrainLineToStation.associate = db => {
    db.TrainLineToStation.belongsTo(db.TrainLine, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.TrainLineToStation.belongsTo(db.TrainStation, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };

  return TrainLineToStation;
};