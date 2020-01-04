<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list dense>
        <!-- items of drawer -->
        <v-list-item v-for="(item, index) in drawerItems" :key="index" :to="item.path" link>
          <!-- icon -->
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <!-- title -->
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="rgba(45,45,45,0.98)"
      dark
      app
      fixed
    >
      <!-- navbar icon button -->
      <v-app-bar-nav-icon @click="drawer = !drawer" :class="`${ panel ? '' : 'hidden-md-and-up' }`"></v-app-bar-nav-icon>

      <!-- toolbar title -->
      <v-toolbar-title class="headline text-uppercase mr-5">
        <router-link :to="{ name: toolbarTitle.path }" class="white--text">
          <span class="font-weight-bold">{{ toolbarTitle.text[0] }}</span>
          <span class="font-weight-light">{{ toolbarTitle.text.slice(1) }}</span>
        </router-link>
      </v-toolbar-title>

      <!-- items of toolbar -->
      <v-toolbar-items v-for="(item, index) in toolbarItems" :key="index">
        <v-btn v-if="!panel" class="text-capitalize hidden-sm-and-down" :to="item.path" text>{{ item.text }}</v-btn>
      </v-toolbar-items>

      <!-- toolbar spinner -->
      <v-progress-linear indeterminate absolute bottom color="blue accent-4"></v-progress-linear>

      <v-spacer></v-spacer>

      <v-text-field class="hidden-sm-and-down" label="Search..." solo-inverted flat hide-details dense />
      <!-- account menu -->

      <!-- auth buttons -->
      <div v-if="!panel">
        <v-btn @click="pushRoute('sign_up')" class="mr-2 text-capitalize hidden-sm-and-down" text small>
          <span>Sign up</span>
        </v-btn>

        <v-btn @click="pushRoute('sign_in')" class="text-capitalize black--text" color="white" small>
          <span>Sign in</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style>
a {
  text-decoration: none;
}
</style>

<script>
export default {
  props: {
    toolbarTitle: {
      type: Object,
      required: true
    },
    panel: {
      type: Boolean
    }
  },
  data: () => ({
    drawer: false,
    menu: false,
    drawerItems: [
      {
        icon: "home",
        text: "Home",
        path: "/"
      },
      {
        icon: "library_books",
        text: "Blog",
        path: "/blog"
      },
      {
        icon: "people",
        text: "About us",
        path: "/about"
      },
      {
        icon: "chat_bubble",
        text: "Contact us",
        path: "/contact"
      }
    ],
    toolbarItems: [
      {
        icon: "library_books",
        text: "Blog",
        path: "/blog"
      },
      {
        icon: "people",
        text: "About us",
        path: "/about"
      },
      {
        icon: "chat_bubble",
        text: "Contact us",
        path: "/contact"
      }
    ]
  }),
  methods: {
    pushRoute (name) {
      this.$router.push({ name })
    }
  }
}
</script>
