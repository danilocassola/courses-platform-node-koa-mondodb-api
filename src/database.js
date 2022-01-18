import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.DATABASE);
mongoose.connection
  .on('error', (err) => console.log('MongoDB Error!', err.message))
  .on('connected', () => console.log('MondoDB connected!'))
  .on('disconnected', () => console.log('MondoDB disconnected!'));
