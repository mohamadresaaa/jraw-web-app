<template>
  <v-app>
    <Bar title="jraw" routeTitle="home" />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Bar from "./../../components/bars/Bar"

export default {
  components: {
    Bar
  },
  data: () => ({
    //
  })
}
</script>
