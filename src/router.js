import Router from 'koa-router';
import 'dotenv/config';
import userRouter from './user/user.router';
import config from './config';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    info: `Course Platform  server${config.DATABASE}`,
    datetime: new Date(),
  };
});

router.use(userRouter.routes());

router.get('/test', (ctx) => {
  ctx.body = '<h1>Test</h1>';
});

export default router;
