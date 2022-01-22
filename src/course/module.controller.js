import Course from './course.model';

// Check if the module exists
// const checkModule = async (ctx, next) => {
//   const { id } = ctx.params;

//   try {
//     const course = await Course.findById(id);
//     if (!course) {
//       ctx.status = 404;
//       throw new Error('Course not found');
//     }

//     await next();
//   } catch (err) {
//     ctx.status = 404;
//     ctx.body = { message: err.message };
//   }
// };

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

// // Get all courses
// const list = async (ctx) => {
//   try {
//     const courses = await Course.find();
//     if (!courses) {
//       throw new Error('There are no courses');
//     }

//     ctx.status = 200;
//     ctx.body = courses;
//   } catch (err) {
//     ctx.status = 500;
//     ctx.body = { message: err.message };
//   }
// };

// // Get course
// const view = async (ctx) => {
//   const { id } = ctx.params;

//   try {
//     const course = await Course.findById(id);

//     ctx.body = course;
//   } catch (err) {
//     ctx.status = 404;
//     ctx.body = { message: err.message };
//   }
// };

// // Uptade course
// const update = async (ctx) => {
//   const { id } = ctx.params;
//   const { name, description, videoUrl, imageUrl } = ctx.request.body;

//   try {
//     const course = await Course.findByIdAndUpdate(
//       id,
//       { name, description, videoUrl, imageUrl },
//       { new: true }
//     );

//     ctx.status = 200;
//     ctx.body = course;
//   } catch (err) {
//     ctx.status = 500;
//     ctx.body = { message: err.message };
//   }
// };

// // Delete course
// const remove = async (ctx) => {
//   const { id } = ctx.params;

//   try {
//     await Course.findByIdAndDelete(id);
//     ctx.status = 200;
//     ctx.body = { message: 'Course has been deleted.' };
//   } catch (err) {
//     ctx.status = 500;
//     ctx.body = { message: err.message };
//   }
// };

// export { check, list, create, view, update, remove };
export { createModule };
