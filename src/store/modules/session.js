import http from "@/lib/http"

export default {
  namespaced: true,
  state: {
    items: [],
    item: {}
  },
  actions: {
    fetchSessions ({ state, commit }) {
      // Clear session
      commit("setItems", { resource: "session", items: [] }, { root: true })
      return http.get("/api/v1/user/sessions")
        .then(({ data: { properties } }) => {
          // Set sessions
          commit("setItems", { resource: "session", items: properties.session }, { root: true })

          // Return sessions
          return state.items
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message, color: "red" } }, { root: true })
        })
    }
  }
}
