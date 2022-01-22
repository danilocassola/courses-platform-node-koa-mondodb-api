import KoaRouter from 'koa-router';
import verifyToken from '../../auth/verifyToken';
import { authAdmin } from '../../auth/authorization';
// import { check, create, view, update, remove } from './module.controller';
import { create } from './module.controller';

const router = new KoaRouter({
  prefix: '/api/courses/module',
});

// router.get('/:id', check, view);
router.post('/', verifyToken, authAdmin, create);
// router.put('/:id', check, verifyToken, authAdmin, update);
// router.delete('/:id', check, verifyToken, authAdmin, remove);

export default router;
