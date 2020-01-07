<template>
  <v-list-group prepend-icon="settings">
    <!-- title -->
    <template v-slot:activator>
      <v-list-item>
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item>
    </template>
    <!-- items -->
    <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
      <v-list-item-action>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-action>
      <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        text: "Edit Profile",
        path: "/user/edit_profile"
      },
      {
        text: "Privacy",
        path: "/user/account"
      },
      {
        text: "Change Password",
        path: "/user/change_password"
      }
      ]
    }
  }
}

</script>
