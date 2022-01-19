import Router from 'koa-router';
import 'dotenv/config';
import userRouter from './user/user.router';
import authRouter from './auth/auth.router';
import config from './config';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    info: `Course Platform Server${config.DATABASE}`,
    datetime: new Date(),
  };
});

router.use(userRouter.routes());
router.use(authRouter.routes());

export default router;
