import KoaRouter from 'koa-router';
import verifyToken from '../../auth/verifyToken';
import { authAdmin } from '../../auth/authorization';
import { check } from '../course.controller';
import {
  checkMod,
  viewMod,
  createMod,
  updateMod,
  delMod,
} from './module.controller';

const router = new KoaRouter({
  prefix: '/api/courses/:id',
});

router.use(check);

router.get('/:modId', checkMod, viewMod);
router.put('/:module', createMod, verifyToken, authAdmin);
router.put('/:modId', checkMod, verifyToken, authAdmin, updateMod);
router.delete('/:modId', checkMod, verifyToken, authAdmin, delMod);

export default router;
