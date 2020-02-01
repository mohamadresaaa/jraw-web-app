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
