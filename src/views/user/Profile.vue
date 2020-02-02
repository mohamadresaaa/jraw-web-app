<template>
<v-container>
    <v-layout wrap>
        <v-flex xs12 sm12 md12>
            <v-card-title class="px-0 mx-0 my-2">
            <h3 class="font-weight-medium text-capitalize">Profile</h3>
            </v-card-title>
        </v-flex>
            <v-flex xs12 sm12 md12 lg12>
                <v-layout row>
                    <v-flex xs12 sm12 md6 lg6>
                        <v-card :class="`${$vuetify.breakpoint.mdAndDown ? 'ma-4' : 'ml-4 mr-1'}`" outlined>
                            <v-responsive class="pa-3">
                                <v-avatar size="200" class="blue lighten-2">
                                    <div v-if="!user.avatar" class="display-4 text-truncate white--text">
                                        {{ user.username[0] }}
                                    </div>
                                    <img v-else :src="'https://avatars3.githubusercontent.com/u/41260098?s=460&v=4'" alt="">
                                </v-avatar>
                            </v-responsive>
                            <v-card-text>
                                <div class="headline">
                                    {{ !user.firstName && !user.lastName ? user.username : (`${user.firstName} ${user.lastName}`) }}
                                </div>
                                <v-divider></v-divider>

                                <div class="font-weight-bold pt-2">
                                    <v-icon>event</v-icon> {{ !user.birthday ? "Please record your date of birth!" : user.birthday }}
                                </div>
                                <div class="font-weight-bold pt-2">
                                    <v-icon>email</v-icon> {{ user.email }}
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6 lg6>
                        <v-card :class="`${$vuetify.breakpoint.mdAndDown ? 'ma-4' : 'mr-4 ml-1'}`" outlined>
                            <v-card-text>
                                <v-card-title class="headline">
                                    Bio
                                </v-card-title>
                                <div>
                                    {{ !user.bio ? "Please complete your bio..." : user.bio }}
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data () {
    return {
      counterDate: [{
        title: "notes",
        count: 10,
        icon: "note",
        iconColor: "blue"
      },
      {
        title: "tasks",
        count: 5,
        icon: "toc",
        iconColor: "green"
      },
      {
        title: "posts",
        count: 20,
        icon: "archive",
        iconColor: "teal"
      },
      {
        title: "events",
        count: 3,
        icon: "event_note",
        iconColor: "red"
      }
      ]
    }
  },
  computed: {
    ...mapGetters({
      "user": "auth/authUser"
    })
  }
}
</script>
