import { createStore } from "vuex";
import axios from "axios";

let cart = window.localStorage.getItem("cart");

export default createStore({
  state: {
    menus: [],
    cart: cart ? JSON.parse(cart) : [],
  },

  getters: {
    menus: (state) => state.menus,
    cartCount: (state) => {
      return state.cart.length;
    },

    totalPrice: (state) => {
      let total = 0;
      state.cart.forEach((menu) => {
        if (menu.price && menu.quantity) {
          total += menu.price * menu.quantity;
        }
      });
      return total;
    },
  },

  actions: {
    async fetchMenuItems({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:3000/menus");
        commit("setMenuItems", data);
      } catch (error) {
        console.error(error);
      }
    },

    addQuantity({ commit }, menu) {
      commit("addToCart", menu);
    },

    minusQuantity({ commit }, menu) {
      commit("removeFromCart", menu);
    },
  },

  mutations: {
    setMenuItems(state, menus) {
      menus.forEach((menu) => {
        menu.price = Number(menu.price);
        menu.quantity = 1;
      });
      state.menus = menus;
    },

    addToCart(state, menus) {
      let found = state.cart.find((item) => item.id == menus.id);

      if (found) {
        found.quantity++;
      } else {
        menus.price = Number(menus.price);
        menus.quantity = 1;
        state.cart.push(menus);
      }

      this.commit("saveData");
    },

    saveData(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart(state, menu) {
      let found = state.cart.find((item) => item.id == menu.id);

      if (found && found.quantity > 1) {
        found.quantity--;
      } else if (found && found.quantity === 1) {
        let index = state.cart.indexOf(menu);
        state.cart.splice(index, 1);
      }

      this.commit("saveData");
    },
  },
});
