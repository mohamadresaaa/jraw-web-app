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
      </v-content>
    </v-img>
  </v-app>
</template>
<script>
// import Bar from "./../../components/bars/Bar"

export default {
  components: {
    // Bar
  },
  data: () => ({
    //
  })
}
</script>
