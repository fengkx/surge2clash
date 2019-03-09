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
const port = process.env.PORT || 3000;

http.createServer(app.callback()).listen(port, function () {
    console.log('Listening  on port ' + port)
});

