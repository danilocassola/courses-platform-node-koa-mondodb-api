import KoaRouter from 'koa-router';
import verifyToken from '../../auth/verifyToken';
import { authAdmin } from '../../auth/authorization';
import { check } from '../course.controller';
import {
  checkMod,
  viewModule,
  createModule,
  updateModule,
  deleteModule,
} from './module.controller';

const router = new KoaRouter({
  prefix: '/api/courses/:id',
});

router.use(check);

router.get('/:modId', checkMod, viewModule);
router.put('/module', verifyToken, authAdmin, createModule);
router.put('/:modId', checkMod, verifyToken, authAdmin, updateModule);
router.delete('/:modId', checkMod, verifyToken, authAdmin, deleteModule);

export default router;
