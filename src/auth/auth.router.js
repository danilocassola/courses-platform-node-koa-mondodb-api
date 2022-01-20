import KoaRouter from 'koa-router';
import { signup, login } from './auth.controller';
import token from './token';

const router = new KoaRouter({
  prefix: '/api/auth',
});

router.post('/login', login, token);
router.post('/signup', signup, token);

export default router;
