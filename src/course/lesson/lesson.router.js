import KoaRouter from 'koa-router';
import verifyToken from '../../auth/verifyToken';
import { authAdmin } from '../../auth/authorization';
import { check } from '../course.controller';
import { checkMod } from '../module/module.controller';
import {
  checkLes,
  createLesson,
  viewLesson,
  updateLesson,
  deleteLesson,
} from './lesson.controller';

const router = new KoaRouter({
  prefix: '/api/courses/:id/:modId',
});

router.use(check, checkMod);

router.get('/:lesId', checkLes, viewLesson);
router.put('/lesson', verifyToken, authAdmin, createLesson);
router.put('/:lesId', checkLes, verifyToken, authAdmin, updateLesson);
router.delete('/:lesId', checkLes, verifyToken, authAdmin, deleteLesson);

export default router;
