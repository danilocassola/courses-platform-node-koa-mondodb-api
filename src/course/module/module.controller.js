import Course from '../course.model';

// Check if the module exists
const checkMod = async (ctx, next) => {
  const { id, modId } = ctx.params;
  const course = await Course.findById(id);
  try {
    const module = course.modules.id(modId);

    if (!module) {
      ctx.status = 404;
      throw new Error('Module not found');
    }

    await next();
  } catch (err) {
    ctx.status = 404;
    ctx.body = { message: err.message };
  }
};

// Create new module
const createModule = async (ctx) => {
  const { id } = ctx.params;
  const course = await Course.findById(id);

  try {
    const module = course.modules.push(ctx.request.body);
    const updatedCourse = await course.save();
    ctx.status = 201;
    ctx.body = updatedCourse.modules[module - 1];
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

// Get module
const viewModule = async (ctx) => {
  const { id, modId } = ctx.params;
  const course = await Course.findById(id);
  const module = course.modules.id(modId);

  ctx.status = 200;
  ctx.body = module;
};

// Uptade module
const updateModule = async (ctx) => {
  const { id, modId } = ctx.params;
  const { name } = ctx.request.body;

  const course = await Course.findById(id);
  const module = course.modules.id(modId);

  try {
    module.name = name;
    await course.save();

    ctx.status = 200;
    ctx.body = module;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

// Delete module
const deleteModule = async (ctx) => {
  const { id, modId } = ctx.params;

  try {
    await Course.findByIdAndUpdate(id, { $pull: { modules: { _id: modId } } });
    ctx.status = 200;
    ctx.body = { message: 'Module has been deleted.' };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

export { checkMod, viewModule, createModule, updateModule, deleteModule };
