<template>
    <div>
        <v-layout row wrap justify-center class="mb-3">
            <!-- count data  -->
            <v-flex xs6 sm6 md3 lg3 v-for="(item, index) in counterDate" :key="index">
                <v-card :class="`pa-2 ${$vuetify.breakpoint.mdAndDown ? 'ma-4' : 'mx-4'}`" :dark=$switchMode() outlined>
                    <v-card-actions>
                        <v-list-item-content>
                            <v-list-item-title class="headline font-weight-bold text-capitalize">{{ item.title }}:
                                {{ item.count }}</v-list-item-title>
                        </v-list-item-content>
                        <v-icon :color="item.iconColor" size=60>{{ item.icon }}</v-icon>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12>
                <v-layout wrap>
                    <v-flex xs12 sm12 md6 lg6>
                        <v-card :class="`pa-2 ${$vuetify.breakpoint.mdAndDown ? 'ma-4' : 'mx-4'}`" outlined>
                            <!-- avatar -->
                            <v-responsive class="pa-3">
                                <v-avatar size="200" class="blue lighten-2">
                                    <div class="title text-truncate white--text">
                                        {{ "mohamadresaaa" }}
                                    </div>
                                    <img :src="'https://avatars3.githubusercontent.com/u/41260098?s=460&v=4'" alt="">
                                </v-avatar>
                            </v-responsive>
                            <v-card-text>
                                <!-- fullName or username -->
                                <div class="headline">
                                    {{ "Mohamadreza Mosalli" }}
                                </div>
                                <v-divider></v-divider>

                                <!-- birthday -->
                                <div class="font-weight-bold pt-2">
                                    <v-icon>event</v-icon> {{ "1999-10-16" }}
                                </div>

                                <!-- email -->
                                <div class="font-weight-bold pt-2">
                                    <v-icon>email</v-icon> {{ "mohamadresaaa@gmail.com" }}
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 md6 lg6>
                        <v-card :class="`pa-2 ${$vuetify.breakpoint.mdAndDown ? 'ma-4' : 'mx-4'}`" outlined>
                            <!-- bio -->
                            <v-card-text>
                                <v-card-title class="headline">
                                    Bio
                                </v-card-title>
                                <div class="black--text">
                                    {{ 'Please complete your bio...' }}
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
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
  }
}
</script>
