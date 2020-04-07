import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const shoppingCart = {
  state: {
    cartList:[
      {itemId: 1, count: 24, price: 40},
      {itemId: 3, count: 2, price: 150},
    ]
  },

  mutations: {
    addItemToCart (state, item) {
      state.cartList.push(item)
    }
  },

  getters: {
    cartList: (state) => state.cartList
  },

  actions: {
    addNewItem (context, item) {
      context.commit("addItemToCart", item)
    }
  }
  
}

const member = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}

export default new Vuex.Store({
  modules: {
    shoppingCart: shoppingCart,
    member: member
  }
});
