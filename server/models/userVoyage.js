'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserVoyage = sequelize.define('UserVoyage', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    voyageName: DataTypes.TEXT,
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