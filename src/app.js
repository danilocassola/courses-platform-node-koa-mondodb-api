import Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';

import router from './router';
import config from './config';
import './database';

const app = new Koa();
app.use(helmet());
app.use(json());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost/${config.PORT}`);
});
