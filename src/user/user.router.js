import KoaRouter from 'koa-router';
import { check, list, profile, update, remove } from './user.controller';
import { verifyToken, auth } from '../auth/verifyToken';

const router = new KoaRouter({
  prefix: '/api/users',
});

router.get('/', list);
router.get('/profile', verifyToken, profile);
router.get('/update', verifyToken, update);
router.delete('/:id', check, verifyToken, auth, remove);

export default router;
