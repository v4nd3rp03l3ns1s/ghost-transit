'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserBus = sequelize.define('UserBus', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    stopID: DataTypes.TEXT,
    stopName: DataTypes.TEXT,
  });

  UserBus.associate = db => {
    db.UserBus.belongsTo(db.UserVoyage, {
      onDelete: "CASCADE",
      foreignKey: '_id',
      as: 'voyage_id'
    });
    db.UserBus.belongsTo(db.BusRoute, {
      onDelete: "CASCADE",
      foreignKey: 'routeID'
    });
    db.UserBus.belongsTo(db.BusDirection, {
      onDelete: "CASCADE",
      foreignKey: 'direction'
    });
    db.UserBus.belongsTo(db.BusStop, {
      onDelete: "CASCADE",
      foreignKey: 'stopID'
    });
  };

  return UserBus;
};