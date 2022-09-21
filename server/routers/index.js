'use strict';

const { Router } = require('express');
// import sub routers

const rootRouter = Router();

//rootRouter directs to subRouters

export { rootRouter as router };