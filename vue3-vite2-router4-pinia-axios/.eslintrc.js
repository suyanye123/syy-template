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
  plugins: ["prettier", "import"],
  //自定义校验规则，拓展或者覆盖extends配置规则
  // "off"或者0     关闭检测规则
  // "warn"或者1    打开并把打开的检测规则作为警告（(不会导致程序退出）
  // "error"或者2   打开并把检测规则作为一个错误（中断程序）
  rules: {
    // prettier
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",


    "no-restricted-syntax": ["error",  "WithStatement"],   //禁用JS特定的语法 with语句
    "no-var": "error", //禁用var，用let和const代替
    "no-undef": ["error"],
    "no-void": "error", //禁用void操作符
    "no-tabs": "off", // 禁用 tab
    "no-debugger": "off", //不能调试
    //不检查属性名称驼峰法命名
    camelcase: ["error", { properties: "never" }],
    //若变量不会再次赋值，推荐使用const声明
    "prefer-const": ["warn", { destructuring: "all", ignoreReadBeforeAssign: true }],
    //使用模板字面量而不是字符串拼接
    "prefer-template": "error",
    //对象字面量语法简写
    "object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
    //变量声明在定义块外部报错
    "block-scoped-var": "error",
    //条件语句的条件中不允许出现恒定不变的量，循环语句除外
    "no-constant-condition": ["error", { checkLoops: false }],
    //规定不要重复声明变量
    "no-redeclare": "off",
    //未使用的变量
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    // 禁止出现空语句块,catch除外
    "no-empty": ["error", { allowEmptyCatch: true }],
    //空行最多不能超过2行
    "no-multiple-empty-lines": [1, { max: 2 }],
    // 语句分号结尾
    semi: ["error", "always"],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: ["error", "double"],
    // 是否一致的换行风格
    "linebreak-style": "off",
    // 强制使用一致的缩进
    //"MemberExpression"（默认值：1）对多行属性链执行缩进级别。这也可以设置为"off"禁用检查MemberExpression缩进。
    //ignoredNodes: ["TemplateLiteral"]  忽略模板字符串的缩进
    indent: [
      "error",2,
      { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ["TemplateLiteral"] },
    ],

    // vue
    "vue/no-v-html": "off",   //不使用v-html
    "vue/require-default-prop": "off",  //props 需要默认值
    "vue/require-explicit-emits": "off",  //由$emit()触发的事件名称需要定义在emits:[]选项中
    "vue/multi-word-component-names": "off",  //组件名称是否使用驼峰

    // import
    "import/first": "error",  //绝对导入应该放在相对导入前面
    "import/no-duplicates": "error",  //从单个模块进行的所有导入使用单一import语句
    "import/order": [  //验证导入是否正确，插件 eslint-plugin-import的配置项，参考https://www.jianshu.com/p/31262bccbf91
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        pathGroups: [
          {
            pattern: "vue",
            group: "external",
            position: "before",
          },
          {
            pattern: "@vue/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "ant-design-vue",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["type"],
      },
    ],
  },
};
