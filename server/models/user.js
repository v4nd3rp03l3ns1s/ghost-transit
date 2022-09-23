'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: DataTypes.TEXT,
    username: DataTypes.TEXT,
    passHash: DataTypes.TEXT
  });

  User.associate = db => {
    db.User.hasMany(db.UserVoyage, {
      onDelete: "CASCADE",
      foreignKey: '_id',
      as: 'voyage_user_id'
    });
  };

  return User;
};