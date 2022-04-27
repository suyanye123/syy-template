# Vue 3 + Vite2 + Pinia2

This template should help get you started developing with Vue 3 in Vite. 

The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.



## Feature

- 🍐 集成多环境配置，dev、test 、pro 和 github pages 环境
- 🍎 集成 Eslint + Prettier + Vetur ，代码约束和格式化统一
- 🍍 集成 Pinia，Vuex 的替代方案，轻量、简单、易用
- 📦 集成 UI 按需导入插件 unplugin-vue-components
- 🍏 二次封装 Axios，支持多 axios 实例，支持线上环境免重新打包修改 baseURL



## Depends

- [Vue 3.x](https://github.com/vuejs/vue-next)
- [Vue-Router 4.x](https://github.com/vuejs/vue-router-next)
- [Pinia2](https://github.com/posva/pinia/) - manage state instead of vuex
- [axios](https://github.com/axios/axios)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - a vite plugin can auto import ui library on demand
- [Prettier](https://github.com/prettier/prettier) - 代码风格的约束工具
- [ESLint](https://so.csdn.net/so/search?q=ESLint&spm=1001.2101.3001.7020) - 代码质量和错误检查工具
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) -  ESLint 整合 Prettier 插件
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)  - ESLint 禁用掉一些不必要的和 Prettier 冲突的 规则
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports



## Usage

```shell
# 安装依赖
yarn
# 运行
yarn dev
```



## Recommended IDE Setup

- VS Code + Eslint + Prettier + Vetur  -  代码规范
- EditorConfig for VS Code  -  跨不同编辑器或 IDE 统一编码风格配置
- Todo Tree  -  待办事项



## Notice

本模板代码规范采用的是 Vetur + Eslint + Prettier 方案，

具体配置可参考 .vscode 文件，

您也可以删除该文件，然后使用 [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) 等其他方案自行配置。



## Commit standards 

#### git commit 规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
- `mod` 不确定分类的修改
- `release` 发布