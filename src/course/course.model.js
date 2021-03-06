import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  videoUrl: {
    type: String,
    required: false,
  },
});

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lessons: [lessonSchema],
});

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    modules: [moduleSchema],
  },
  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);

export default Course;
