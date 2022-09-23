'use strict';

const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { SECRET_KEY } = require('./config');

const authenticationMiddleware = async (ctx, next) => {
  const authHeaders = req.headers['authorization'];
  if (!authHeaders) ctx.status = 403;
  const token = authHeaders.split(' ')[1];
  try {
    const { _id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({ _id });
    if (!user) ctx.status = 401;
    ctx.user = user;
    next();
  } catch (err) {
    ctx.body = err;
    ctx.status = 401;
  }
};

module.exports = authenticationMiddleware;