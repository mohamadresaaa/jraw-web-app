<template>
  <v-app>
    <BaseBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import BaseBar from "./../../components/bars/BaseBar"

export default {
  components: {
    BaseBar
  },
  data: () => ({
    //
  })
}
</script>
