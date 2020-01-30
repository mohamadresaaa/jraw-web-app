import Vue from "vue"
import Vuex from "vuex"

// modules
import account from "./modules/account"
import auth from "./modules/auth"
import session from "./modules/session"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    message: null
  },
  getters: {
    loading: state => state.loading,
    message: state => state.message
  },
  mutations: {
    setItems (state, { resource, items }) {
      state[resource].items = items
    },
    setItem (state, { resource, item }) {
      state[resource].item = item
    },
    setMainState (state, { resource, item }) {
      state[resource] = item
    }
  },
  actions: {
    clearMessage ({ commit }) {
      return commit("setMainState", { resource: "message", item: null })
    }
  },
  modules: {
    account,
    auth,
    session
  }
})
