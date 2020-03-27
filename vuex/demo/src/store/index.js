import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: 'Hello World',
  },

  mutations: {
    changeMsg: (state, newMsg) => {
      state.msg = newMsg
    }
  },

  actions: {
    future: ({commit}, newMsg) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("changeMsg", newMsg);
          resolve()
        }, 2000)
      })
    }
  }
});
