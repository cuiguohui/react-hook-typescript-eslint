/**
 * Created by 张添 on 2018-12-06 14:59
 * Develop by 张添 on 2018-12-06 14:59
 */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/proxy',
    { target: 'http://musicapi.leanapp.cn', pathRewrite: { '^/proxy': '' } }));
};
