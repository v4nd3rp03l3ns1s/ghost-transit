'use strict';

module.exports = (sequelize, DataTypes) => {
  const BusDirection = sequelize.define('BusDirection', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    direction: DataTypes.TEXT,
  });

  BusDirection.associate = db => {
    db.BusDirection.hasMany(db.BusStop, {
      onDelete: "CASCADE",
      foreignKey: 'direction_id',
    });
    db.BusDirection.hasMany(db.UserBus, {
      onDelete: "CASCADE",
      foreignKey: 'direction_id',
    });
    db.BusDirection.belongsTo(db.BusRoute, {
      onDelete: "CASCADE",
      foreignKey: 'routeID',
      targetKey: 'routeID'
    });
  };

  return BusDirection;
};