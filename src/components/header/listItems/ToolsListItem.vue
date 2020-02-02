<template>
  <v-list shaped>
    <v-list-item-group color="primary">
      <v-list-item v-if="$vuetify.breakpoint.mdAndUp">
        <v-list-item-icon>
        </v-list-item-icon>
        <v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="(item, i) in items" :key="i" :to="{ name: item.path }" class="my-1" link>
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        text: "Notes",
        icon: "notes",
        path: "notes"
      },
      {
        text: "Contacts",
        icon: "contacts",
        path: "contacts"
      },
      {
        text: "Posts",
        icon: "archive",
        path: "posts"
      },
      {
        text: "Events",
        icon: "event",
        path: "events"
      }
      ]
    }
  }
}
</script>
