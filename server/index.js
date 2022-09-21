'use strict';

const Koa = require('Koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
let corsOptions = {
  credentials: true,
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'DELETE']
};

const db = require('./models/db.js');
// const router = require
// const PORT = env?

app.use(cors(corsOptions));
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Ghost train running at http://localhost:${PORT}`)
});