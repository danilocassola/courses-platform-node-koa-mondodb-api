import KoaRouter from 'koa-router';
import verifyToken from '../auth/verifyToken';
import { authAdmin } from '../auth/authorization';
import { check, list, create, view, update, remove } from './course.controller';

const router = new KoaRouter({
  prefix: '/api/courses',
});

router.get('/', list);
router.get('/:id', check, view);
router.post('/', verifyToken, authAdmin, create);
router.put('/:id', check, verifyToken, authAdmin, update);
router.delete('/:id', check, verifyToken, authAdmin, remove);

export default router;
