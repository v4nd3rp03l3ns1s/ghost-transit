'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserTrain = sequelize.define('UserTrain', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    stopID: DataTypes.TEXT,
    stopName: DataTypes.TEXT,
    direction: DataTypes.TEXT
  });

  UserTrain.associate = db => {
    db.UserTrain.belongsTo(db.UserVoyage, {
      onDelete: "CASCADE",
      foreignKey: '_id',
      as: 'voyage_id'
    });
    db.UserTrain.belongsTo(db.TrainLine, {
      onDelete: "CASCADE",
      foreignKey: 'lineName'
    });
    db.UserTrain.belongsTo(db.TrainStop, {
      onDelete: "CASCADE",
      foreignKey: 'stopID'
    });
  };

  return UserTrain;
};