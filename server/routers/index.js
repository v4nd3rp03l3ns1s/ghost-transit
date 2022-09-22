'use strict';

const Router = require('koa-router');

//initialize all routers
const rootRouter = new Router();
const devRouter = new Router();

rootRouter.use(
  '/dev',
  devRouter.routes(),
  devRouter.allowedMethods()
);

module.exports = { rootRouter, devRouter };