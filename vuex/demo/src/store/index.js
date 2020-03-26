import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation-types"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: 'Hello World',
  },

  mutations: {
    [types.CHANGE_MSG] : (state, newMsg) => {
      state.msg = newMsg
    }
  },

  actions: {
    changeMsg: (context, newMsg) => {
      context.commit(types.CHANGE_MSG, newMsg)
    },

    changeUserInfo: (context, {userName, userAge, userAddr}) => {
      context.commit("updateUserName", userName);
      context.commit("updateUserAge", userAge);
      context.commit("updateUserAddr", userAddr);
    }
  }
});
