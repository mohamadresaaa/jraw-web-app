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
    },
    login ({ commit }, data) {
      return http.post("/api/v1/auth/login", data)
        .then(({ data: { properties } }) => {
          // Set token in localStorage
          // localStorage.setItem("access-jraw", properties.user.token)

          // Save data of user in state
          commit("setAuthUser", properties.user)

          // Go to login page
          router.go()
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message } }, { root: true })
        })
    },
    passwordRecovery ({ commit }, data) {
      return http.post("/api/v1/auth/passwordRecovery", data)
        .then(({ data: { message } }) => {
          // Set message state
          commit("setMainState", { resource: "message", item: { content: message, color: "blue" } }, { root: true })
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message } }, { root: true })
        })
    },
    validationCode ({ commit }, code) {
      http.get(`/api/v1/auth/verifyCode/${code}`)
        .then(({ data: { properties } }) => properties.email)
        .catch(({ response: { data: { message } } }) => {
          // Go to reset password page
          router.push({ name: "reset_password" })

          // Set message state
          commit("setMainState", { resource: "message", item: { content: message } }, { root: true })
        })
    },
    resetPassword ({ commit }, data) {
      return http.post("/api/v1/auth/resetPassword", data)
        .then(({ data: { message } }) => {
          // Go to sign in page
          router.push({ name: "login" })

          // Set message state
          commit("setMainState", { resource: "message", item: { content: message, color: "blue" } }, { root: true })
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message } }, { root: true })
        })
    }
  },
  mutations: {
    setAuthUser (state, user) {
      state.user = user
    },
    setAuthState (state, authState) {
      state.isAuthResolved = authState
    }
  }
}
