'use strict';

const Koa = require('Koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

//config import
const config = require('./config');

const cors = require('@koa/cors');
let corsOptions = {
  credentials: true,
  origin: config.corsOrigin
};

const db = require('./models/db.js');
const { router } = require('./routers/index.js');
const PORT = config.serverPort;

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

(async function bootstrap () {
  await db.sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Station to Station: http://127.0.0.1:${PORT}`)
  });
})();