module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier"],
  //自定义校验规则，拓展或者覆盖extends配置规则
  // "off"或者0     关闭检测规则
  // "warn"或者1    打开并把打开的检测规则作为警告（(不会导致程序退出）
  // "error"或者2   打开并把检测规则作为一个错误（中断程序）
  rules: {
    // prettier
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",

    "no-tabs": "off", // 禁用 tab
    "no-var": "error", //禁用var，用let和const代替
    "no-void": "error", //禁用void操作符
    "no-empty": ["error", { allowEmptyCatch: true }], // 禁止出现空语句块,允许catch出现空语句
    "no-multiple-empty-lines": [1, { max: 2 }], //空行最多不能超过2行

    camelcase: ["error", { properties: "never" }], //不检查属性名称驼峰法命名
    semi: ["error", "never"], // 要求或禁止使用分号代替 ASI
    quotes: ["error", "double"], // 强制使用一致的反勾号、双引号或单引号
    indent: [
      "error",
      4,
      { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ["TemplateLiteral"] },
    ], // 强制使用一致的缩进
    "linebreak-style": "off", // 强制使用一致的换行风格
    "prettier/prettier": [
      // 自定义不满足规则的提示，error还是warn
      "error",
    ],
  },
};
