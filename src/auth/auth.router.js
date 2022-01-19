import KoaRouter from 'koa-router';
import { signup, login } from './auth.controller';

const router = new KoaRouter({
  prefix: '/api/auth',
});

router.post('/signup', signup);
router.post('/login', login);

export default router;
