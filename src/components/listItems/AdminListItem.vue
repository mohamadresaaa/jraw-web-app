<template>
  <v-list shaped>
    <v-list-item-group color="primary">
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
      items: [
        {
          text: "Analytics",
          icon: "equalizer",
          path: "analytics"
        },
        {
          text: "Users",
          icon: "people",
          path: "users"
        },
        {
          text: "Reports",
          icon: "report",
          path: "reports"
        },
        {
          text: "Tickets",
          icon: "fas fa-ticket-alt",
          path: "Tickets"
        },
        {
          text: "Mail",
          icon: "mail",
          path: "mail"
        }
      ]
    }
  }
}
</script>
