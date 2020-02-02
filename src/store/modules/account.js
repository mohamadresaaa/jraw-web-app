import http from "@/lib/http"
import router from "@/router"

export default {
  namespaced: true,
  actions: {
    activation ({ commit }, code) {
      return http.get(`/api/v1/account/activation/${code}`)
        .then(({ data: { message } }) => {
          // Set message state
          commit("setMainState", { resource: "message", item: { content: message, color: "green" } }, { root: true })

          // Push to sign in page
          router.push({ name: "sign_in" })
        })
        .catch(() => router.push({ name: "home" }))
    },
    deactivation ({ commit }, data) {
      return http.post("/api/v1/account/deactivation", data)
        .then(({ data: { message } }) => {
          // Clear data of state
          commit("auth/setAuthUser", null, { root: true })

          // Set isAuthResolved false
          commit("auth/setAuthState", false, { root: true })

          // Remove access-jraw from localStorage
          localStorage.removeItem("access-jraw")

          // Go to home page
          router.push({ name: "home" })

          // Set message state
          commit("setMainState", { resource: "message", item: { content: message, color: "green" } }, { root: true })
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message } }, { root: true })
        })
    },
    reactivation ({ commit }, data) {
      return http.post("/api/v1/account/reactivation", data)
        .then(({ data: { message } }) => {
          // Set message state
          commit("setMainState", { resource: "message", item: { content: message, color: "green" } }, { root: true })

          // Push to sign in page
          router.push({ name: "sign_in" })
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message } }, { root: true })
        })
    }
  }
}
