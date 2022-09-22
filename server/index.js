'use strict';

const Koa = require('Koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

//config import
const config = require('./config');

const cors = require('@koa/cors');
let corsOptions = {
  credentials: true,
  origin: config.corsOrigin,
  methods: ['GET', 'POST', 'DELETE']
};

const db = require('./models/db.js');
const router = require('./routers/index.js');
const PORT = config.serverPort;

app.use(cors(corsOptions));
app.use(bodyParser());
app.use(router.routes());

(async function bootstrap () {
  await db.sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Ghost train running at http://localhost:${PORT}`)
  });
})();