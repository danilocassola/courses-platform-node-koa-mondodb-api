import KoaRouter from 'koa-router';
import verifyToken from '../auth/verifyToken';
import { authAdmin } from '../auth/authorization';
import { check, list, create, view, update, remove } from './course.controller';

import {
  checkMod,
  viewMod,
  createMod,
  updateMod,
  delMod,
} from './module.controller';

const router = new KoaRouter({
  prefix: '/api/courses',
});

// Course
router.get('/', list);
router.get('/:id', check, view);
router.post('/', verifyToken, authAdmin, create);
router.put('/:id', check, verifyToken, authAdmin, update);
router.delete('/:id', check, verifyToken, authAdmin, remove);

// Module
router.get('/:id/:modId', check, checkMod, viewMod);
router.put('/:id/module', check, verifyToken, authAdmin, createMod);
router.put('/:id/:modId', check, verifyToken, authAdmin, checkMod, updateMod);
router.delete('/:id/:modId', check, verifyToken, authAdmin, checkMod, delMod);

export default router;
