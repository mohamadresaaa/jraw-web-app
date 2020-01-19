import http from "@/lib/http"
import router from "@/router"

export default {
  namespaced: true,
  state: {
    user: null,
    isAuthResolved: false
  },
  getters: {
    authUser (state) {
      return state.user || null
    },
    isAuthenticated (state) {
      return !!state.user
    }
  },
  actions: {
    register ({ commit }, data) {
      return http.post("/api/v1/auth/register", data)
        .then(({ data: { message } }) => {
          // Go to sign in page
          router.push({ name: "sign_in" })

          // Set message state
          commit("setMainState", { resource: "message", item: { content: message, color: "blue" } }, { root: true })
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message } }, { root: true })
        })
    }
  },
  mutations: {

  }
}
