/*  prettier的配置 */
module.exports = {
  printWidth: 100, // 一行最多 120 字符
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 使用缩进符还是使用空格
  semi: true, // 行尾添加分号
  singleQuote: false, // 不使用单引号
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  trailingComma: 'all', // 在对象或数组最后一个元素后面是否加逗号
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css', // html-whitespace-sensitivity（默认为css）
  // css- 尊重 CSSdisplay属性的默认值 决定是否处理标签内的空格。还有 strict和  ignore
  endOfLine: 'lf', // 换行符使用 lf
  arrowParens: 'avoid', // 箭头函数，只有一个参数的时候，省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  vueIndentScriptAndStyle: true, // vue 文件中的 script 和 style 内不用缩进
  embeddedLanguageFormatting: 'auto', // 格式化内嵌代码
  insertPragma: true, // 自动在格式化的文件开头插入 @prettier
  requirePragma: true //严格按照文件顶部的一些特殊的注释格式化代码
}
