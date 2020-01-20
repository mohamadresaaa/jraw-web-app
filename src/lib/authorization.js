import store from "@/store"

// If the user is authenticated it should not see authentication pages
export const isAuthenticated = (to, from, next) => {
  store.getters["auth/isAuthenticated"] ? next({ name: "home" }) : next()
}
