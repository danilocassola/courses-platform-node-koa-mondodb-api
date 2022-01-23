import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    enrolled: [
      { type: Schema.Types.ObjectId, ref: 'Course' },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
