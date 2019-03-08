const http = require('http');
const Koa = require('koa');
const onerror = require('koa-onerror');
const logger = require('koa-logger');
const router = require('./routers/router');

const app = new Koa();

onerror(app);
app.use(logger());

app.use(router.routes());
app.use(router.allowedMethods());

http.createServer(app.callback()).listen(3000);

