import store from "@/store"

// get user authenticated
export const getUser = (to, from, next) => {
  store.dispatch("auth/getAuthUser")
    .then(user => {
      // only users who have been authenticated
      if (to.meta.onlyUsers) {
        if (user) {
          next()
        } else {
          next({
            name: "home"
          })
        }
      } else {
        next()
      }
    })
    .catch(() => {
      next({ name: "home" })
    })
}

// If the user is authenticated it should not see authentication pages
export const isAuthenticated = (to, from, next) => {
  store.getters["auth/isAuthenticated"] ? next({ name: "home" }) : next()
}
