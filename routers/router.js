const Router = require('@eggjs/router');

const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'hello';
});

router.get('/surge2clash', require('./surge2clash'));

module.exports = router;
