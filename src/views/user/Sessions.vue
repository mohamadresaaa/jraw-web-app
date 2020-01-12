<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 mb-4">
          <h3 class="font-weight-medium text-capitalize">sessions</h3>
        </v-card-title>
      </v-flex>
      <v-flex xs12 sm12 md3 v-for="(item, index) in 4" :key="index" class="pa-1">
        <v-card :dark=$switchMode() outlined tile>
          <v-layout wrap class="pa-3">
            <v-flex xs3 sm2 md3>
              <div :class="`mt-5 ${$vuetify.breakpoint.sm ? 'ml-5' : ''}`">
                <v-icon right x-large>desktop_mac</v-icon>
              </div>
            </v-flex>
            <v-flex xs9 sm6 md9>
              <div class="font-weight-bold">Current session</div>
              <ul>
                <li>
                  <div class="body-2 grey--text"><span>ip:</span> <span class="blue-grey--text">192.168.1.1</span>
                  </div>
                </li>
                <li>
                  <div class="body-2 grey--text"><span>Device:</span> <span class="blue-grey--text">mac book
                      pro</span>
                  </div>
                </li>
                <li>
                  <div class="body-2 grey--text"><span>Created at:</span> <span
                      class="blue-grey--text">1999/10/16</span></div>
                </li>
              </ul>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <v-btn @click="deleteItem(item)" class="text-none mt-5" color="red" x-small dark>
                Remove and expired
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}

</script>
