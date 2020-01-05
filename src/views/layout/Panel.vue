<template>
  <v-app>
    <PanelBar />
    <v-content class="pa-0 ma-2">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import PanelBar from "./../../components/header/bars/PanelBar"

export default {
  components: {
    PanelBar
  },
  data: () => ({
    //
  })
}
</script>
