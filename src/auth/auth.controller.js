import User from '../user/user.model';

const signup = async (ctx, next) => {
  const { username, email, password } = ctx.request.body;
  const user = new User({ username, email, password });

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

export default signup;
