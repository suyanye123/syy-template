import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/**
 * 随着项目的复杂，文件结构越来越多，Store中modules中的文件也越来越多，如果一个一个加载会很麻烦，这里用webpack文档中的require.context( )函数创建上下文,传入一个目录进行搜索,还有一个正则表达式来匹配文件,通过这个方法筛选出来我们需要的文件并且读取，动态加载modules文件下的所有JS文件，从而实现前端工程化.
 * 例如： require.context("demo", (useSubdirectories = false), (regExp = /\.js$/));
(创建了）一个包含了 demo 文件夹（不包含子目录）下面的、所有文件名以 `js` 结尾的、能被 require 请求到的文件的上下文。
*/
/**
* @param directory 要搜索的文件夹目录不能是变量，否则在编译阶段无法定位目录
* @param useSubdirectories  是否搜索子目录
* @param regExp 匹配文件的正则表达式
* @return function 返回一个具有 resolve, keys, id 三个属性的方法
          resolve() 它返回请求被解析后得到的模块 id
          keys() 它返回一个数组，由所有符合上下文模块处理的请求组成。 
          id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到
*/

const modulesFiles = require.context("./modules", true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default new Vuex.Store({
  modules,
});
