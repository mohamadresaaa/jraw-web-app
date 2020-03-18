<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list dense>
        <Title />
        <v-divider />
        <!-- items of drawer -->
        <AdminListItem />
        <ToolsListItem />
        <v-divider />
        <UserListItem />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="rgba(45,45,45,0.98)" dense dark fixed>
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase mr-5">
        <router-link :to="{ name: 'home' }" class="white--text">
          <span class="font-weight-bold">j</span>
          <span class="font-weight-light">raw</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- account menu -->
      <UserMenu :user="user" />
    </v-app-bar>
  </div>
</template>

<style>
  a {
    text-decoration: none;
  }

</style>

<script>
import {
  mapGetters
} from "vuex"
import UserMenu from "../../header/UserMenu"
import Title from "../../listItems/Title"
import UserListItem from "../../listItems/UserListItem"
import ToolsListItem from "../../listItems/ToolsListItem"
import AdminListItem from "../../listItems/AdminListItem"

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
    ToolsListItem,
    AdminListItem,
    Title
  }
}

</script>
