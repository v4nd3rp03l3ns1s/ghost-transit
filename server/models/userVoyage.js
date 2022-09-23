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
      foreignKey: '_id',
      as: 'voyage_user_id'
    });
    db.UserVoyage.hasMany(db.UserBus, {
      onDelete: "CASCADE",
      foreignKey: '_id',
      as: 'bus_voyage_id'
    });
    db.UserVoyage.hasMany(db.UserTrain, {
      onDelete: "CASCADE",
      foreignKey: '_id',
      as: 'train_voyage_id'
    });
  };

  return UserVoyage;
};