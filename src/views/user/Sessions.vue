<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 my-2">
          <h3 class="font-weight-medium text-capitalize">sessions</h3>
        </v-card-title>
      </v-flex>
      <v-flex v-for="item in 6" :key="item+'-loader'" xs12 sm6 md6>
        <v-skeleton-loader v-if="loading" :loading="loading" transition="fade-transition" height="140"
          type="list-item-avatar-three-line">
        </v-skeleton-loader>
      </v-flex>
      <v-flex v-for="(item, index) in sessions" :key="index" class="pa-1" xs12 sm6 md6>
        <v-card outlined tile>
          <v-layout wrap class="pa-3">
            <v-flex xs3 sm3 md2>
              <div class="mt-3 ml-5">
                <v-icon :color="item.isCurrent ? 'green' : ''" right x-large>{{ setDeviceIcon(item.device.os) }}
                </v-icon>
              </div>
            </v-flex>
            <v-flex xs9 sm6 md6>
              <ul>
                <li>
                  <div class="body-2 grey--text"><span>ip:</span> <span
                      class="blue-grey--text font-weight-bold">{{ item.ip }}</span>
                  </div>
                </li>
                <li>
                  <div class="body-2 grey--text"><span>Os:</span> <span
                      class="blue-grey--text font-weight-bold">{{ item.device.os }}</span>
                  </div>
                </li>
                <li>
                  <div class="body-2 grey--text"><span>join at:</span> <span
                      class="blue-grey--text font-weight-bold">{{ relativeTime(item.createdAt) }}</span></div>
                </li>
              </ul>
            </v-flex>
            <v-flex xs12 sm3 md3>
              <v-btn v-if="!item.isCurrent" @click="deleteItem(item)" class="text-capitalize white--text mt-5"
                color="red lighten-1" small>
                remove
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import { relativeTime } from "../../lib/dateTime"

export default {
  computed: {
    ...mapGetters(["loading"]),
    ...mapState({
      sessions: state => state.session.items
    })
  },
  created () {
    this.$store.dispatch("session/fetchSessions")
  },
  methods: {
    setDeviceIcon (os) {
      switch (os) {
        case "macOs" || "iOS":
          return "fab fa-apple"
        case "Windows":
          return "fab fa-windows"
        case "Android":
          return "fab fa-android"
        default:
          return "fas fa-question"
      }
    },
    deleteItem (item) {
      this.$store.dispatch("session/deleteSession", item)
    },
    relativeTime
  }
}

</script>
