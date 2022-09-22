'use strict';

module.exports = (sequelize, DataTypes) => {
  const BusDirection = sequelize.define('BusDirection', {
    //autogen a sequential id?
    direction: DataTypes.TEXT,
  });

  BusDirection.associate = db => {
    db.BusDirection.hasMany(db.BusStop, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.BusDirection.hasMany(db.UserBus, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.BusDirection.belongsTo(db.BusRoute, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };

  return BusDirection;
};