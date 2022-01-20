import KoaRouter from 'koa-router';
import { signup, login } from './auth.controller';

const router = new KoaRouter({
  prefix: '/api/auth',
});

router.post('/login', login);
router.post('/signup', signup);

export default router;
