import KoaRouter from 'koa-router';
import verifyToken from '../auth/verifyToken';
import { authUser, authAdmin } from '../auth/authorization';
import {
  check,
  list,
  view,
  update,
  changePassword,
  remove,
  enroll,
  cancelEnroll,
} from './user.controller';

const router = new KoaRouter({
  prefix: '/api/users',
});

router.get('/', verifyToken, authAdmin, list);
router.get('/:id', check, verifyToken, authUser, view);
router.put('/:id', check, verifyToken, authUser, update);
router.delete('/:id', check, verifyToken, authUser, remove);
router.put('/password/:id', check, verifyToken, authUser, changePassword);
router.put('/:id/:courseId', check, verifyToken, authUser, enroll);
router.delete('/:id/:courseId', check, verifyToken, authUser, cancelEnroll);

export default router;
