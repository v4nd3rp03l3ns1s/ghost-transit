'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserVoyage = sequelize.define('UserVoyage', {
    //autogen a sequential id?
    voyageName: DataTypes.TEXT,
    //foreign id for user id?
  });
  //association needed with UserVoyage?
  return UserVoyage;
}