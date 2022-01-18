// import User from './user.model';

const check = async (ctx, next) => {
  console.log(`Check user`);
  await next();
};

const list = async (ctx) => {
  ctx.body = { message: 'Users Route' };
};

const view = async (ctx) => {
  ctx.body = { message: 'User Route View' };
};

const create = async (ctx) => {
  ctx.body = { message: 'User Route Create' };
};

const update = async (ctx) => {
  ctx.body = { message: 'User Route Update' };
};

const remove = async (ctx) => {
  ctx.body = { message: 'User Route Delete' };
};

export { check, list, view, create, update, remove };
