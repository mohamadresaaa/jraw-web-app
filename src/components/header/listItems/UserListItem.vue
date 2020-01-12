<template>
  <div>
    <v-list-group prepend-icon="security">
      <!-- title -->
      <template v-slot:activator>
        <v-list-item>
          <v-list-item-title>Security</v-list-item-title>
        </v-list-item>
      </template>
      <!-- items -->
      <v-list-item v-for="(item, index) in security_items" :key="index" :to="{ name: item.path }">
        <v-list-item-action>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-action>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list-group prepend-icon="settings">
      <!-- title -->
      <template v-slot:activator>
        <v-list-item>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </template>
      <!-- items -->
      <v-list-item v-for="(item, index) in setting_items" :key="index" :to="{ name: item.path }">
        <v-list-item-action>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-action>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      setting_items: [{
        text: "Edit Profile",
        path: "edit_profile"
      },
      {
        text: "Privacy",
        path: "account"
      }],
      security_items: [
        {
          text: "Change password",
          path: "change_password"
        },
        {
          text: "sessions",
          path: "sessions"
        }
      ]
    }
  }
}

</script>
