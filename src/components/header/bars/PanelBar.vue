<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list dense>
        <!-- items of drawer -->
        <ToolsListItem />
        <v-divider />
        <UserListItem />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="rgba(45,45,45,0.98)" app clipped-left dark dense>
      <!-- navbar icon button -->
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- toolbar title -->
      <v-toolbar-title class="headline text-capitalize">
        <router-link :to="{ name: 'home' }" class="white--text">
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
import { mapGetters } from "vuex"
import UserMenu from "../../header/UserMenu"
import UserListItem from "../listItems/UserListItem"
import ToolsListItem from "../listItems/ToolsListItem"

export default {
  data: () => ({
    drawer: false,
    menu: false
  }),
  created () {
    this.setDrawer()
  },
  computed: {
    ...mapGetters({
      "user": "auth/authUser"
    })
  },
  methods: {
    pushRoute (path) {
      this.$router.push(path)
    },
    setDrawer () {
      // eslint-disable-next-line no-unused-expressions
      this.$vuetify.breakpoint.lgAndUp ? this.drawer = true : this.drawer = false
    }
  },
  components: {
    UserMenu,
    UserListItem,
    ToolsListItem
  }
}

</script>
