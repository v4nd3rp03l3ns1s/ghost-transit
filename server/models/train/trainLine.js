'use strict';

module.exports = (sequelize, DataTypes) => {
  const TrainLine = sequelize.define('TrainLine', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    lineName: DataTypes.TEXT,
    trainColor: DataTypes.TEXT
  });

  TrainLine.associate = db => {
    db.TrainLine.hasMany(db.TrainLineToStation, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.TrainLine.hasMany(db.UserTrain, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };

  return TrainLine;
};