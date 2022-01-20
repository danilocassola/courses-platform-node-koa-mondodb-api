import KoaRouter from 'koa-router';
import verifyToken from '../auth/verifyToken';
import { check, list, view, update, remove } from './user.controller';
import { authUser, authAdmin } from '../auth/authorization';

const router = new KoaRouter({
  prefix: '/api/users',
});

router.get('/', verifyToken, authAdmin, list);
router.get('/:id', check, verifyToken, authUser, view);
router.put('/:id', check, verifyToken, authUser, update);
router.delete('/:id', check, verifyToken, authUser, remove);

export default router;
