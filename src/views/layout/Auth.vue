<template>
  <v-app>
    <v-img
      :src="require('../../assets/auth.jpg')"
      class="white--text align-center"
      gradient="to right, rgba(0,0,0,.1), rgba(0,212,255,.7)"
      height="200px"
    >
      <v-content>
        <router-view />
        <Notification />
      </v-content>
    </v-img>
  </v-app>
</template>
<script>
import Notification from "./../../components/Notification"

export default {
  components: {
    Notification
  },
  data: () => ({
    //
  })
}
</script>
