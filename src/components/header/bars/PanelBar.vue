<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list dense>
        <!-- items of drawer -->
        <ToolsListItem />
        <v-divider />
        <UserListItem />
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="rgba(45,45,45,0.98)" dense>
      <!-- navbar icon button -->
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-capitalize">
        <router-link :to="{ name: 'home' }" class="white--text">
          <span class="font-weight-bold">J</span>
          <span class="font-weight-light">Panel</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- account menu -->
      <UserMenu :user="user" />
    </v-toolbar>
  </div>
</template>

<style>
  a {
    text-decoration: none;
  }
</style>

<script>
import { mapGetters } from "vuex"
import UserMenu from "../../header/UserMenu"
import UserListItem from "../listItems/UserListItem"
import ToolsListItem from "../listItems/ToolsListItem"

export default {
  data: () => ({
    drawer: false,
    menu: false
  }),
  computed: {
    ...mapGetters({
      "loading": "loading",
      "user": "auth/authUser"
    })
  },
  methods: {
    pushRoute (path) {
      this.$router.push(path)
    }
  },
  components: {
    UserMenu,
    UserListItem,
    ToolsListItem
  }
}

</script>
