const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // ...
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://help-recover-api.herokuapp.com',
      changeOrigin: true,
    })
  );
};