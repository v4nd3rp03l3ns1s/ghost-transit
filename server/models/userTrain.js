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
      foreignKey: { allowNull: false }
    });
    db.UserTrain.belongsTo(db.TrainLine, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.UserTrain.belongsTo(db.TrainStation, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };

  return UserTrain;
};