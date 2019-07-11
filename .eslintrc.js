module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "parser": 'typescript-eslint-parser',
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "typescript"
    ],
    "rules": {
        "max-len": [1, 70, 2, {ignoreComments: true}],
        "no-console":2, // 禁止提交console语句到仓库
        // 禁止 function 定义中出现重名参数
        "no-dupe-args":2,
        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys":2,
        // 禁止重复的 case 标签
        "no-duplicate-case":2,
        // 禁止不必要的括号 //(a * b) + c;//报错
        "no-extra-parens":2,
        // 禁止不必要的分号
        "no-extra-semi":2,
        // 禁止在字符串和注释之外不规则的空白
        "no-irregular-whitespace":2,
        // 禁止在return、throw、continue 和 break语句之后出现不可达代码
        /*
         function foo() {
         return true;
         console.log("done");
         }//错误
         */
        "no-unreachable":2,
        // 强制数组方法的回调函数中有 return 语句
        "array-callback-return":0,
        // 强制把变量的使用限制在其定义的作用域范围内
        "block-scoped-var":2,
        // 强制在块之前使用一致的空格
        "space-before-blocks": [2,"always"],
        // 强制在 function的左括号之前使用一致的空格
        "space-before-function-paren": [2,"always"],
        // 强制在圆括号内使用一致的空格
        "space-in-parens": [2,"never"],
        // 要求操作符周围有空格
        "space-infix-ops":2,
        // 强制在一元操作符前后使用一致的空格
        "space-unary-ops": [2, {"words":true,"nonwords":false}],
        // 强制在注释中 // 或 /* 使用一致的空格
        "spaced-comment": [2,"always", {"markers": ["global","globals","eslint","eslint-disable","*package","!"] }],
        //类及接口驼峰提示
        "typescript/class-name-casing": 2,
        // 接口提示未定义
        "no-undef": 0,
        "react/jsx-filename-extension": 0,
        "import/extensions": [2, "never", { "web.js": "never", "json": "never",'jsx':"never",'tsx':'never','ts':"never" }],
        "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
        "import/no-unresolved":0,
         // 禁止未使用的变量
         "no-unused-vars": 2,
        }
};
