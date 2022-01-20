import User from './user.model';

const check = async (ctx, next) => {
  // const check = async (id) => {
  const { id } = ctx.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      ctx.status = 404;
      throw new Error('User not found');
    }

    await next();
  } catch (err) {
    ctx.status = 404;
    ctx.body = { message: err.message };
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
  const { id } = ctx.params;
  const { username, email } = ctx.request.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { username, email },
      { new: true }
    );

    ctx.status = 200;
    ctx.body = user;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
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
