'use strict';

const Router = require('koa-router');
// import sub routers
const devRouter = require('./devRouter');

const rootRouter = new Router();

//rootRouter directs to subRouters
rootRouter.use('/dev', devRouter);

module.exports = rootRouter;