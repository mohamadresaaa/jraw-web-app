<template>
  <v-menu v-model="menu" :close-on-content-click="menu" :close-on-click="menu" offset-x>
    <!-- avatar of user -->
    <template v-slot:activator="{ on }">
      <v-avatar size="36px" v-on="on" class="blue lighten-2">
        <div v-if="!user.avatar" class="white--text">
          {{ user.username[0] }}
        </div>
        <img v-else :src="user.avatar" :alt="user.username">
      </v-avatar>
    </template>
    <v-card>
      <v-list>
        <v-list-item>
          <!-- avatar of user -->
          <v-list-item-avatar size="36px" class="blue lighten-2" tile>
            <div v-if="!user.avatar" class="white--text">
              {{ user.username[0] }}
            </div>
            <img v-else :src="user.avatar" :alt="user.username">
          </v-list-item-avatar>
          <!-- fullName and role of user -->
          <v-list-item-content>
            <v-list-item-title>{{ user.fullName || user.username }}</v-list-item-title>
            <v-list-item-subtitle>
              <v-chip v-if="user.role.includes('admin')" small class="mt-2" color="primary" label>Admin</v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <!-- dashboard link -->
        <v-list-item to="/user/panel">
          <v-list-item-action>
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Dashboard
          </v-list-item-content>
        </v-list-item>
        <!-- profile link -->
        <v-list-item>
          <v-list-item-action>
            <v-icon>person</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Profile
          </v-list-item-content>
        </v-list-item>
        <!-- logout link -->
        <v-list-item @click="logout()">
          <v-list-item-action>
            <v-icon>logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Logout
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      menu: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch("auth/logout")
    }
  }
}

</script>
