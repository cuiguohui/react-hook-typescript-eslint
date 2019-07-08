/**
 * Created by 崔国辉 on 2019/7/8 0008 14:56
 * Develop by 崔国辉 on 2019/7/8 0008 14:56
 */
const { setWebpackConfig } = require('./webpackConfig');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  setWebpackConfig(config, env);
  return config;
};