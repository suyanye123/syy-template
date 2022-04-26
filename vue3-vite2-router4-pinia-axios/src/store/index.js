import {
  defineStore
} from "pinia"
export const mainStore = defineStore({
  // 定义数据的地方
  state: () => {},
  // 这个actions和以前的不同，这个是为了当前项目过大，所使用的
  actions: {},
  // pinia的 getters 和以前不同，🙅‍♂️是返回数据用的
  // 而是类似于 vue 中的计算属性
  getters: {
    // 可以传递state,或者用this代替
  }
})