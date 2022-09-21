'use strict';

const Koa = require('Koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
const xmlParser = require('koa-xml-parser');
const parseXML = xmlParser();

const cors = require('@koa/cors');
let corsOptions = {
  credentials: true,
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'DELETE']
};

const db = require('./models/db.js');
const router = require('./routers/index.js');
// const PORT = env?

app.use(cors(corsOptions));
app.use(bodyParser());
app.use(parseXML());
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Ghost train running at http://localhost:${PORT}`)
});