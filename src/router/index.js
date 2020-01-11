import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/layout/Base.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        component: Home
      },
      {
        path: "about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  },
  {
    path: "/auth",
    component: () => import("../views/layout/Auth.vue"),
    redirect: "/auth/sign_in",
    children: [
      {
        path: "sign_in",
        name: "sign_in",
        component: () => import("../views/auth/SignIn.vue")
      },
      {
        path: "sign_up",
        name: "sign_up",
        component: () => import("../views/auth/SignUp.vue")
      },
      {
        path: "reset_password/:code?",
        name: "reset_password",
        component: () => import("../views/auth/ResetPassword.vue")
      }
    ]
  },
  {
    path: "/user",
    component: () => import("../views/layout/Panel.vue"),
    redirect: "/user/panel",
    children: [
      {
        path: "panel",
        name: "user_panel",
        component: () => import("../views/user/Profile.vue")
      },
      {
        path: "change_password",
        name: "change_password",
        component: () => import("../views/user/ChangePassword.vue")
      },
      {
        path: "edit_profile",
        name: "edit_profile",
        component: () => import("../views/user/EditProfile.vue")
      },
      {
        path: "notes",
        name: "notes",
        component: () => import("../views/user/Notes.vue")
      },
      {
        path: "posts",
        name: "posts",
        component: () => import("../views/user/Posts.vue")
      },
      {
        path: "contacts",
        name: "contacts",
        component: () => import("../views/user/Contacts.vue")
      },
      {
        path: "events",
        name: "events",
        component: () => import("../views/ErrorPage.vue"),
        props: {
          title: "Coming soon...",
          message: "The event feature will soon be added to the jraw",
          color: "primary"
        }
      }
    ]
  },
  {
    path: "/admin",
    component: () => import("../views/layout/Panel.vue"),
    redirect: "/admin/panel",
    children: [
      {
        path: "panel",
        name: "admin_panel"
      },
      {
        path: "users",
        name: "users",
        component: () => import("../views/admin/Users.vue")
      }
    ]
  },
  {
    path: "/404",
    name: "not_found",
    component: () => import("../views/ErrorPage.vue"),
    props: {
      title: "Oops!",
      message: "We can't find the page you're looking for.Try searching our posts",
      color: "secondary"
    }
  },
  {
    path: "*",
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
