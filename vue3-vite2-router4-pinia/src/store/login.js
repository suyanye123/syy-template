import { defineStore } from "pinia";

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    obj: { a: s1, b: 2 },
    num: 1,
    txt: "xxx",
    list: [],
  }),
  //计算属性
  getters: {
    getA() {
      return this.obj.a;
    },
    getNum: (state) => {
      return state.num;
    },
  },
  actions: {
    //直接修改对应state
    insertPost() {
      this.list.push(`time_${Date.now()}`);
    },
    //通过patch 函数
    insertList() {
      this.$patch((state) => {
        state.list.push(1);
      });
    },
    //通过.$patch 对象方法
    replaceObj() {
      this.$patch({
        age: 30,
      });
    },
  },
});
