<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list dense>
        <!-- items of drawer -->
        <ToolsListItem />
        <v-divider />
        <UserListItem />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="rgba(45,45,45,0.98)" dark app fixed dense>
      <!-- navbar icon button -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- toolbar title -->
      <v-toolbar-title class="headline text-uppercase mr-5">
        <router-link to="/user/panel" class="white--text">
          <span class="font-weight-bold">J</span>
          <span class="font-weight-light">Panel</span>
        </router-link>
      </v-toolbar-title>

      <!-- toolbar spinner -->
      <v-progress-linear indeterminate absolute bottom color="blue accent-4"></v-progress-linear>

      <v-spacer></v-spacer>

      <!-- account menu -->
      <UserMenu v-if="user" :user="user" />
    </v-app-bar>
  </div>
</template>

<style>
  a {
    text-decoration: none;
  }

</style>

<script>
import UserMenu from "../../header/UserMenu"
import UserListItem from "../listItems/UserListItem"
import ToolsListItem from "../listItems/ToolsListItem"

export default {
  data: () => ({
    drawer: false,
    menu: false,
    items: [{
      text: "Notes",
      routeName: "notes"
    },
    {
      text: "Contacts",
      routeName: "contacts"
    },
    {
      text: "Posts",
      routeName: "posts"
    },
    {
      text: "Events",
      routeName: "events"
    }
    ],
    user: {
      username: "mohamadresaaa",
      avatar: "https://avatars3.githubusercontent.com/u/41260098?s=460&v=4",
      role: ["user", "admin"]
    }
  }),
  methods: {
    pushRoute (name) {
      this.$router.push({
        name
      })
    }
  },
  components: {
    UserMenu,
    UserListItem,
    ToolsListItem
  }
}

</script>
