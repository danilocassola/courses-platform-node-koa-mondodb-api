import bcrypt from 'bcryptjs/dist/bcrypt';
import User from '../user/user.model';

// Signup user
const signup = async (ctx, next) => {
  const { username, email, password } = ctx.request.body;

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, email, password: hashedPassword });

  try {
    await user.save();
    ctx.status = 201;
    ctx.state.userId = user.id;

    await next();

    ctx.body = {
      message: 'User has been created.',
      token: ctx.state.token,
      userId: user.id,
    };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

// Login user
const login = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      ctx.status = 404;
      throw new Error('User not found');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      ctx.status = 401;
      throw new Error('Invalid password');
    }

    ctx.state.userId = user.id;

    await next();

    ctx.body = {
      message: 'Logged in!',
      token: ctx.state.token,
      userId: user.id,
    };
  } catch (err) {
    ctx.body = { message: err.message };
    if (!ctx.status) {
      ctx.status = 500;
    }
  }
};

export { signup, login };
