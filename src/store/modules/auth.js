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
      return state.user
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
          localStorage.setItem("access-jraw", properties.token)

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
      return http.get(`/api/v1/auth/verifyCode/${code}`)
        .then(({ data: { properties } }) => (properties.email))
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
          router.push({ name: "sign_in" })

          // Set message state
          commit("setMainState", { resource: "message", item: { content: message, color: "blue" } }, { root: true })
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message } }, { root: true })
        })
    },
    getAuthUser ({ commit, getters }) {
      // Get token from access-jraw
      if (localStorage.getItem("access-jraw")) {
        const user = getters["authUser"]

        // If find user
        if (user) {
          return Promise.resolve(user)
        }

        // Otherwise
        return http.get("/api/v1/user")
          .then(({ data: { properties } }) => {
            // Set data of user in state
            commit("setAuthUser", properties.user)

            // Set isAuthResolved
            commit("setAuthState", true)

            // Return data
            return properties.user
          })
          .catch(error => {
            // Clear data of state
            commit("setAuthUser", null)

            // Set isAuthResolved false
            commit("setAuthState", false)

            // Return error
            return error
          })
      }
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
