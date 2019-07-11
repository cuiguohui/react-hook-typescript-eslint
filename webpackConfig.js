/**
 * Created by 崔国辉 on 2019/7/8 0008 15:00
 * Develop by 崔国辉 on 2019/7/8 0008 15:00
 */
const deepcopy = require('deepcopy');
const path = require('path');

// 改变入口文件
const setEntry = (config) => {
  config.entry[1] = path.resolve('./src/', './index.tsx');
};

// 将css通过import的方式引入
const setCSSModule = (config) => {
  let cssLoaderUse = null;
  for (let i = 0; i < config.module.rules.length; i += 1) {
    const rule = config.module.rules[i];
    if (rule.oneOf) {
      for (let j = 0; j < rule.oneOf.length; j += 1) {
        const one = rule.oneOf[j];
        if (one.test && one.test.source === '\\.css$') {
          const cssModule = one;
          const cssKeep = deepcopy(cssModule);
          // one.use.push({
          //   loader: path.resolve('./node_modules/typings-for-css-modules-loader/', './lib/index.js'),
          //   options: {
          //     modules: true,
          //     namedExport: true,
          //   },
          // });
          cssLoaderUse = one.use;
          cssModule.exclude = [/node_modules/, /\.keep\.css/];
          cssKeep.include = [/node_modules/, /\.keep\.css/];
          rule.oneOf.splice(j + 1, 0, cssKeep);
          j += 1;
          break;
        }
      }
    }
  }

  for (let k = 0; k < cssLoaderUse.length; k += 1) {
    if (cssLoaderUse[k].loader && cssLoaderUse[k].loader.split('\\').includes('css-loader')) {
      const cssLoader = cssLoaderUse[k];
      if (!cssLoader.options) {
        cssLoader.options = {};
      }
      cssLoader.options.modules = true;
      cssLoader.options.sourceMap = true;
      break;
    }
    if (cssLoaderUse[k].split('\\').includes('css-loader')) {
      const cssLoader = {};
      cssLoader.loader = cssLoaderUse[k];
      cssLoader.options = {
        modules: true,
        sourceMap: true,
      };
      cssLoaderUse[k] = cssLoader;
      break;
    }
  }
};

// 配置eslint
const setESLint = (config) => {
  for (let i = 0; i < config.module.rules.length; i += 1) {
    const rule = config.module.rules[i];
    if (rule.test && (rule.test.source === '\\.(js|jsx|mjs)$' || rule.test.source === '\\.(js|mjs|jsx)$') && rule.enforce === 'pre') {
      rule.use[0].options.eslintPath = 'eslint';
      rule.use[0].options.useEslintrc = true;
      rule.use[0].options.ignore = true;
      rule.use[0].options.baseConfig = false;
      break;
    }
  }
};

const setWebpackConfig = (config, env, options) => {
  // if (options.webpackBabelImportConfig) {
  //   setBabelImport(config, env, options);
  // }
  //
  // if (options.webpackProfileConfig) {
  //   setProfile(config, env, options);
  // }
  //
  // if (options.webpackDevelopmentEntryConfig) {
  //   setDevelopmentEntry(config, env, options);
  // }
  setEntry(config, env, options);
  setESLint(config, env, options);
  setCSSModule(config, env, options);

  // if (options.webpackAliasAntdIcons) {
  //   setAliasAntdIcons(config, env, options);
  // }
};
module.exports = {
  setWebpackConfig,
};
