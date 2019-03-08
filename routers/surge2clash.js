const got = require('../utils/got');
const surge2Clash = require('../utils/surge2clash');

module.exports = async (ctx, next) => {
  const {url} = ctx.query;
  const res = await got(url);
  ctx.type = 'text/plain';
  ctx.body = surge2Clash(res.body, ctx.query);
  await next();
};
