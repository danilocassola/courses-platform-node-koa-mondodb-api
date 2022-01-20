import Router from 'koa-router';
import userRouter from './user/user.router';
import authRouter from './auth/auth.router';
import 'dotenv/config';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    info: `Courses Platform Server`,
    datetime: new Date(),
  };
});

router.use(userRouter.routes());
router.use(authRouter.routes());

export default router;
