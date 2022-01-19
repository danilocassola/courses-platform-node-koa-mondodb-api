import bcrypt from 'bcryptjs/dist/bcrypt';

import User from '../user/user.model';

const signup = async (ctx, next) => {
  const { username, email, password } = ctx.request.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });

  try {
    await user.save();
    ctx.status = 201;
    ctx.state.userId = user.id;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }

  await next();
};

const login = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  try {
    const user = await User.findOne({ username });

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      ctx.status = 401;
      ctx.body = { message: 'Invalid passoword' };
      return;
    }

    ctx.status = 201;
    ctx.body = { message: 'Logged in!' };
    ctx.state.userId = user.id;
  } catch (err) {
    ctx.body = { message: 'User not found' };
    ctx.status = 500;
  }
  await next();
};

export { signup, login };
