<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-card>
      <doughnutChart />
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
