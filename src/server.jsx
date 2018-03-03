import path from 'path';
import Koa from 'koa';
import staticFiles from 'koa-static';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './components/App';

const koa = new Koa();

koa.use(staticFiles(path.resolve(__dirname, '../dist')));

koa.use(ctx => {
  const context = {};
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={ctx.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    ctx.redirect(context.url);
  } else {
    ctx.body = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>sample</title>
  </head>
  <body>
    <div id="root">${markup}</div>
    <script src="client.bundle.js"></script>
  </body>
</html>
  `;
  }
});

koa.listen(3000);

