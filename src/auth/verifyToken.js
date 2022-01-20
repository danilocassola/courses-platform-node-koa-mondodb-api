import jwt from 'jsonwebtoken';
import config from '../config';

const verifyToken = async (ctx, next) => {
  const { token } = ctx.request.headers;

  if (!token) {
    ctx.throw(401, 'Missing Token!');
  }

  try {
    const verified = jwt.verify(token, config.JWT_SECRET);
    ctx.state.userId = verified.id;
    ctx.state.userIsAdmin = verified.isAdmin;
    await next();
  } catch (err) {
    ctx.throw(401, 'Invalid Token!');
  }
};

const auth = async (ctx, next) => {
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

export { verifyToken, auth, authAdmin };
