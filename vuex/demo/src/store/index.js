import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const shoppingCart = {
  state: {
    cartList:[
      {productId: 1, count: 24, price: 40},
      {productId: 3, count: 2, price: 150},
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
  state: {
    userInfo: {
      name: 'Johnny',
      age: '21',
      addr: 'Taipei'
    }
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    updateUserInfo (context, {name, age, addr}) {
      context.commit("setUserInfo", {name, age, addr})
    }
  },
  getters: {
    userInfo: (state) => state.userInfo
  }
}

export default new Vuex.Store({
  modules: {
    shoppingCart: shoppingCart,
    member: member
  }
});
