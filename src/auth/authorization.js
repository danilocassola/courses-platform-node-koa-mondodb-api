const authUser = async (ctx, next) => {
  const { id } = ctx.params;
  if (ctx.state.userId === id || ctx.state.userIsAdmin === true) {
    await next();
  } else {
    ctx.status = 401;
    ctx.body = { message: 'Unauthorized' };
  }
};

const authAdmin = async (ctx, next) => {
  if (ctx.state.userIsAdmin === true) {
    await next();
  } else {
    ctx.status = 401;
    ctx.body = { message: 'Unauthorized' };
  }
};

export { authUser, authAdmin };
