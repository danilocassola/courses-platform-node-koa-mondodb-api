import Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import router from './router';
import config from './config';

import './database';

const app = new Koa();

// app.context.errStatus = 200;

app.use(json());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.PORT, () => {
  console.log('Server running http://localhost/3000');
});
