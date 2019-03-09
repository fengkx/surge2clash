const http = require('http');
const Koa = require('koa');
const onerror = require('koa-onerror');
const logger = require('./middlewares/logger');
const favicon = require('koa-favicon');
const router = require('./routers/router');
const path = require('path');
const app = new Koa();

onerror(app);
app.use(logger);
app.use(favicon(path.join(__dirname, 'static/favicon.ico')))
app.use(router.routes());
app.use(router.allowedMethods());
const port = process.env.PORT || 3000;

http.createServer(app.callback()).listen(port, function () {
    console.log('Listening  on port ' + port)
});

