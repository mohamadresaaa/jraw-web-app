import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/sign_in",
    name: "sign_in",
    component: () => import("../views/auth/SignIn.vue")
  },
  {
    path: "/sign_up",
    name: "sign_up",
    component: () => import("../views/auth/SignUp.vue")
  },
  {
    path: "/reset_password/:code?",
    name: "reset_password",
    component: () => import("../views/auth/ResetPassword.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
