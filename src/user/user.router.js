import KoaRouter from 'koa-router';
import { check, list, view, create, update, remove } from './user.controller';

const router = new KoaRouter({
  prefix: '/api/users',
});

router.get('/', list);
router.get('/create', create);
router.get('/view', check, view);
router.get('/update', check, update);
router.get('/delete', check, remove);

export default router;
