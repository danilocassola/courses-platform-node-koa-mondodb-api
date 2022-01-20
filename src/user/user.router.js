import KoaRouter from 'koa-router';
import { check, list, profile, update, remove } from './user.controller';
import { verifyToken, auth, authAdmin } from '../auth/verifyToken';

const router = new KoaRouter({
  prefix: '/api/users',
});

router.get('/', verifyToken, authAdmin, list);
router.put('/:id', check, verifyToken, auth, update);
router.delete('/:id', check, verifyToken, auth, remove);
router.get('/profile', verifyToken, profile);

export default router;
