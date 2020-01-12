<template>
  <v-app>
    <PanelBar />
    <v-content class="pa-0">
      <v-container fluid>
        <router-view />
      </v-container>
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
