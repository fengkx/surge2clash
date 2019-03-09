module.exports = async (ctx, next) => {
    const startTime = Date.now()/1000;
    await next();
    if(ctx.request.path !== '/favicon.ico')
        console.log(ctx.status, ctx.header['user-agent'],Date.now()/1000 -startTime)
};
