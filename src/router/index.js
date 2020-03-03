import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import StatusPage from "../views/StatusPage.vue"
import { isAuthenticated, getUser } from "../lib/authorization"

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
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("../views/Contact.vue")
      }
    ]
  },
  {
    path: "/auth",
    component: () => import("../views/layout/Auth.vue"),
    redirect: "/auth/sign_in",
    beforeEnter: isAuthenticated,
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
      },
      {
        path: "account_activation/:code",
        name: "account_activation",
        component: () => import("../views/auth/Activation.vue")
      },
      {
        path: "account_reactivation",
        name: "account_reactivation",
        component: () => import("../views/auth/Reactivation.vue")
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
        path: "account",
        name: "account",
        component: () => import("../views/user/Account.vue")
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
        path: "sessions",
        name: "sessions",
        component: () => import("../views/user/Sessions.vue")
      },
      {
        path: "events",
        name: "events",
        component: StatusPage,
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
        name: "admin_panel",
        component: () => import("../views/admin/Dashboard.vue")
      },
      {
        path: "users",
        name: "users",
        component: () => import("../views/admin/user/List.vue")
      },
      {
        path: "blocked_users",
        name: "blocked_users",
        component: () => import("../views/admin/user/BlockedUsers.vue")
      },
      {
        path: "requests",
        name: "requests",
        component: () => import("../views/admin/Requests.vue")
      },
      {
        path: "user_reports",
        name: "user_reports",
        component: () => import("../views/admin/reports/UserReports.vue")
      }
    ]
  },
  {
    path: "/404",
    name: "not_found",
    component: StatusPage,
    props: {
      title: "Oops!",
      message: "We can't find the page you're looking for.Try searching our posts"
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

// Checked user
router.beforeEach(getUser)

export default router
