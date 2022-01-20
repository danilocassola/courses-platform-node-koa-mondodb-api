import User from './user.model';

const check = async (ctx, next) => {
  const { id } = ctx.params;

  const user = await User.findById(id);

  if (!user) {
    try {
      ctx.status = 404;
      throw new Error('User not found');
    } catch (err) {
      ctx.body = { message: err.message };
    }
  } else {
    await next();
  }
};

const list = async (ctx) => {
  ctx.body = { message: 'Users Route' };
};

const profile = async (ctx) => {
  const id = ctx.state.userId;
  const user = await User.findById(id);
  const { password, ...others } = user._doc;

  ctx.body = others;
};

const update = async (ctx) => {
  ctx.body = { message: 'User Route Update' };
};

const remove = async (ctx) => {
  const { id } = ctx.params;

  try {
    await User.findByIdAndDelete(id);
    ctx.status = 200;
    ctx.body = { message: 'User has been deleted.' };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

export { check, list, profile, update, remove };
