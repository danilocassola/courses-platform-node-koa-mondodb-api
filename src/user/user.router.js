import KoaRouter from 'koa-router';
import { check, list, view, create, update, remove } from './user.controller';

const userRouter = new KoaRouter({
  prefix: '/api/users',
});

userRouter.get('/', list);
userRouter.get('/create', create);
userRouter.get('/view', check, view);
userRouter.get('/update', check, update);
userRouter.get('/delete', check, remove);

export default userRouter;
