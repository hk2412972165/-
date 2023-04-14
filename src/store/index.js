import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 购物车里面的数组有很多条，用一个数组给他保存起来
    cartList: [],
  },
  getters: {},
  mutations: {
    mutationsCartList(state, list) {
      return (state.cartList = list);
    },
  },
  actions: {},
  modules: {},
});
