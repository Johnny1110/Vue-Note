import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation-types"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: 'Hello World'
  },
  mutations: {
    [types.CHANGE_MSG] : (state, newMsg) => {
       state.msg = newMsg
      }
    },
  actions: {},
  modules: {}
});
