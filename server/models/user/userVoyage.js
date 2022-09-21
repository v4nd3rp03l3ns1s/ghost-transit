'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserVoyage = sequelize.define('UserVoyage', {
    //autogen a sequential id?
    voyageName: string,
  });

  UserVoyage.associate = db => {
    db.UserVoyage.belongsTo(db.User, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.UserVoyage.hasMany(db.UserBus, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
    db.UserVoyage.hasMany(db.UserTrain, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };

  return UserVoyage;
};