'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    //autogen a sequential id?
    email: DataTypes.TEXT,
    username: DataTypes.TEXT,
    passHash: DataTypes.TEXT
  });
  //association needed with UserVoyage?
  return User;
}