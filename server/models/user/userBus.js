'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserBus = sequelize.define('UserBus', {
    //autogen a sequential id?
    stopID: DataTypes.TEXT,
    stopName: DataTypes.TEXT,
  });

  UserBus.associate = db => {
    db.UserBus.belongsTo(db.UserVoyage, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.UserBus.belongsTo(db.BusRoute, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.UserBus.belongsTo(db.BusDirection, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.UserBus.belongsTo(db.BusStop, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };

  return UserBus;
};