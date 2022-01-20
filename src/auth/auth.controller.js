import bcrypt from 'bcryptjs/dist/bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

import User from '../user/user.model';

// Signup user
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

// Login user
const login = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      // ctx.errStatus = 404;
      ctx.status = 404;
      throw new Error('User not found');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      ctx.status = 401;
      throw new Error('Invalid password');
    }

    // Token
    const payload = {
      id: user.id,
      isAdmin: user.isAdmin,
    };
    const authToken = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1d' });

    ctx.status = 200;
    ctx.body = { message: 'Logged in!', token: authToken, userId: user.id };
    ctx.append('token', authToken);

    ctx.state.userId = user.id;
  } catch (err) {
    ctx.body = { message: err.message };
    if (!ctx.status) {
      ctx.status = 500;
    }
  }
  await next();
};

export { signup, login };
