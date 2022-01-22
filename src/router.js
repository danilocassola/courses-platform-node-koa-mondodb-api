import Router from 'koa-router';
import userRouter from './user/user.router';
import authRouter from './auth/auth.router';
import courseRouter from './course/course.router';
import moduleRouter from './course/module/module.router';
import lessonRouter from './course/lesson/lesson.router';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    info: 'Courses Platform Server',
    datetime: new Date(),
  };
});

router.use(userRouter.routes());
router.use(authRouter.routes());
router.use(courseRouter.routes());
router.use(moduleRouter.routes());
router.use(lessonRouter.routes());

export default router;
