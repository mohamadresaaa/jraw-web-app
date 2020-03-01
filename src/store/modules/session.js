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
      return http.get("/user/sessions")
        .then(({ data: { properties } }) => {
          // Set sessions
          commit("setItems", { resource: "session", items: properties.sessions }, { root: true })

          // Return sessions
          return state.items
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message, color: "red" } }, { root: true })
        })
    },
    deleteSession ({ state, commit }, item) {
      return http.delete(`/user/sessions/${item._id}`)
        .then(({ data: { message } }) => {
          // Find index
          let index = state.items.indexOf(item)

          // Remove item from sessions
          state.items.splice(index, 1)

          // Set message state
          commit("setMainState", { resource: "message", item: { content: message, color: "green" } }, { root: true })
        })
        .catch(({ response: { data: { message } } }) => {
          commit("setMainState", { resource: "message", item: { content: message, color: "red" } }, { root: true })
        })
    }
  }
}
