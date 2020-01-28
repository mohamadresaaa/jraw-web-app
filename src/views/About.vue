<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-card>
      <doughnutChart :labels="['nodejs']" :data="[40, 20, 80, 10]" :backgroundColors="['#41B883','#E46651','#00D8FF','#DD1B16']" />
    </v-card>

  </div>
</template>

<script>
import doughnutChart from "../components/charts/doughnutChart"

export default {
  components: {
    doughnutChart
  }
}
</script>
