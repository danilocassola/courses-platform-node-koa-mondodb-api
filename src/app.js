import Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import router from './router';

import 'dotenv/config';
import './database';

const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server running http://localhost/3000');
});
