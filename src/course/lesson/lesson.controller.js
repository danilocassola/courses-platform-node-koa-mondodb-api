import Course from '../course.model';

// Check if the lesson exists
const checkLes = async (ctx, next) => {
  const { id, modId, lesId } = ctx.params;
  const course = await Course.findById(id);

  try {
    const lesson = course.modules.id(modId).lessons.id(lesId);

    if (!lesson) {
      ctx.status = 404;
      throw new Error('Lesson not found');
    }

    await next();
  } catch (err) {
    ctx.status = 404;
    ctx.body = { message: err.message };
  }
};

// Create new lesson
const createLesson = async (ctx) => {
  const { id, modId } = ctx.params;
  const course = await Course.findById(id);
  const module = course.modules.id(modId);

  try {
    const lesson = module.lessons.push(ctx.request.body);
    const updatedCourse = await course.save();
    const updateLesson = updatedCourse.modules.find(
      (mod) => mod.id === module.id
    ).lessons[lesson - 1];

    ctx.status = 201;
    ctx.body = updateLesson;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

// Get lesson
const viewLesson = async (ctx) => {
  const { id, modId, lesId } = ctx.params;
  const course = await Course.findById(id);
  const lesson = course.modules.id(modId).lessons.id(lesId);

  ctx.status = 200;
  ctx.body = lesson;
};

// Uptade lesson
const updateLesson = async (ctx) => {
  const { id, modId, lesId } = ctx.params;
  const { name, description, videoUrl } = ctx.request.body;

  const course = await Course.findById(id);
  const lesson = course.modules.id(modId).lessons.id(lesId);

  try {
    lesson.name = name;
    lesson.description = description;
    lesson.videoUrl = videoUrl;

    await course.save();

    ctx.status = 200;
    ctx.body = lesson;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

// Delete lesson
const deleteLesson = async (ctx) => {
  const { id, modId, lesId } = ctx.params;
  const course = await Course.findById(id);
  const module = course.modules.id(modId);

  // Find index of the lesson
  const index = module.lessons.findIndex((lesson) => lesson.id === lesId);

  try {
    module.lessons.splice(index, index);
    await course.save();

    ctx.status = 200;
    ctx.body = { message: 'Lesson has been deleted.' };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
};

export { checkLes, createLesson, viewLesson, updateLesson, deleteLesson };
