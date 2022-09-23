'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const { SECRET_KEY } = require('../../middleware/config');

const userController = {
  //method for registration
  createAccount: async function (ctx) {
    const { email, username, password } = ctx.request.body;
    const newUser = await User.findOne({ email: email });
    if (newUser) {
      ctx.body = 'User with that email already exists.';
      ctx.status = 409;
    }
    try {
      //manage hashing for password

      //establish token for jwt
    } catch (err) {
      ctx.body = err;
      ctx.status = 400;
    }
  }
  //post? method for login

  //logging out?

}

module.exports = userController;