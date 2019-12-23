<template>
  <v-app>
    <Bar title="jraw" routeTitle="/" />
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld"
import Bar from "./components/bars/Bar"

export default {
  name: "App",

  components: {
    HelloWorld,
    Bar
  },

  data: () => ({
    //
  })
}
</script>
