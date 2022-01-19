import 'dotenv/config';

const config = {
  DATABASE: process.env.DATABASE,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT,
};

export default config;
