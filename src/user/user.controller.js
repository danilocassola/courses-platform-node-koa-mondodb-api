import bcrypt from 'bcryptjs/dist/bcrypt';
import User from './user.model';

// Check if the user exists
const check = async (ctx, next) => {
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

// Get all users
const list = async (ctx) => {
  try {
    const users = await User.find();
    if (!users) {
      throw new Error('There are no users');
    }

    // Password will not sending back
    const usersFiltered = users.map((user) => {
      const { password, ...others } = user._doc;
      return others;
    });

    ctx.status = 200;
    ctx.body = usersFiltered;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

// Get user
const view = async (ctx) => {
  const { id } = ctx.params;

  try {
    const user = await User.findById(id);

    // Password will not sending back
    const { password, ...others } = user._doc;

    ctx.body = others;
  } catch (err) {
    ctx.status = 404;
    ctx.body = { message: err.message };
  }
};

// Uptade user
const update = async (ctx) => {
  const { id } = ctx.params;
  const { username, email } = ctx.request.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { username, email },
      { new: true }
    );

    // Password will not sending back
    const { password, ...others } = user._doc;

    ctx.status = 200;
    ctx.body = others;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

// Change password
const changePassword = async (ctx) => {
  const { id } = ctx.params;
  const { password } = ctx.request.body;

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.findByIdAndUpdate(
      id,
      { password: hashedPassword },
      { new: true }
    );

    ctx.status = 200;
    ctx.body = { message: 'Password has been changed.' };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

// Delete user
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

export { check, list, view, update, changePassword, remove };
