<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 mb-4">
          <h3 class="font-weight-medium text-capitalize">Dashboard</h3>
        </v-card-title>
      </v-flex>
      <v-flex xs12 sm12 md6 lg6>
        <v-card class="mx-2" outlined>
          <v-card-text>
            <v-card-title class="headline">
              Status of users
            </v-card-title>
            <v-spacer></v-spacer>
            <doughnutChart :labels="['active', 'inactive', 'block']" :data="[40, 20, 80]" :backgroundColors="['#00E676','#FFC400','#FF1744']" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6 lg6>
        <v-card class="mx-2" outlined>
          <v-card-text>
            <v-card-title class="headline">
              Os users
            </v-card-title>
            <v-spacer></v-spacer>
            <doughnutChart :labels="['macOs', 'Windows', 'Linux', 'iOS', 'Android']" :data="[20, 65, 10, 50, 70]" :backgroundColors="['#424242','#2979FF','#FF9100','#FF1744','#2E7D32']" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import doughnutChart from "../../components/charts/doughnutChart"

export default {
  components: {
    doughnutChart
  }
}
</script>
