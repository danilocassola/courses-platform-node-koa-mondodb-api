import Koa from 'koa';
import json from 'koa-json';
import router from './router';
import 'dotenv/config';
import './database';

const app = new Koa();

app.use(json());
app.use(router.routes());

app.listen(3000, () => {
  console.log('Server running http://localhost/3000');
});
