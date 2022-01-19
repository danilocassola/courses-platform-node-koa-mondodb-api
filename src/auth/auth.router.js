import KoaRouter from 'koa-router';
import signup from './auth.controller';

const router = new KoaRouter({
  prefix: '/api/auth',
});

router.post('/signup', signup);

export default router;
