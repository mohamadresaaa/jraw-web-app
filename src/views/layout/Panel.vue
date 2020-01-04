<template>
  <v-app>
    <Bar :toolbarTitle="{ text: 'jpanel', path: 'panel' }" panel />
    <v-content class="pa-0 ma-2">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Bar from "./../../components/Bar"

export default {
  components: {
    Bar
  },
  data: () => ({
    //
  })
}
</script>
