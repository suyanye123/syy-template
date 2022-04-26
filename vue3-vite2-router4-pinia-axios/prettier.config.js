/*  prettier的配置 */
module.exports = {
  "prettier.printWidth": 100, // 超过最大值换行
  "prettier.tabWidth": 2, // 缩进字节数
  "prettier.useTabs": true, // 缩进使用tab
  "prettier.semi": true, // 句尾添加分号
  "prettier.singleQuote": true, // 使用单引号代替双引号
  "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
  "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
  "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
  "prettier.htmlWhitespaceSensitivity": "ignore",
  "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
  "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
  "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
  "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
  "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
  "prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  "prettier.tslintIntegration": false, // 不让prettier使用tslint的代码格式进行校验
};
module.exports = {
  // 一行最多 120 字符
  printWidth: 120,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾需要有逗号
  trailingComma: "all",
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: "always",
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: null,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: "preserve",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "css",
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf
  endOfLine: "lf",
  // 格式化内嵌代码
  embeddedLanguageFormatting: "auto",


   printWidth: 120, // 换行字符串阈值
  tabWidth: 2, // 设置工具每一个水平缩进的空格数
  useTabs: false,
  semi: false, // 句末是否加分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 用单引号
  trailingComma: 'none', // 最后一个对象元素符加逗号
  bracketSpacing: true,
  jsxBracketSameLine: true, // jsx > 是否另取一行
  arrowParens: 'always', // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头加入 @prettier
  endOfLine: 'lf' // 换行符使用 lf


};
