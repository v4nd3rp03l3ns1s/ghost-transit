'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    //autogen a sequential id?
    email: DataTypes.TEXT,
    username: DataTypes.TEXT,
    passHash: DataTypes.TEXT
  });

  User.associate = db => {
    db.User.hasMany(db.UserVoyage, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };

  return User;
};