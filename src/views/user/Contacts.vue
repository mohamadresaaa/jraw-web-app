<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 my-2">
          <h3 class="font-weight-medium text-capitalize">contacts</h3>
        </v-card-title>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-layout wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="(contact, index) in contacts" :key="index">
            <v-card class="text-center text-xs-center ma-1" outlined>
              <v-responsive class="pa-3">
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="contact.image" :alt="contact.name">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">
                  {{ contact.name }}
                </div>
                <div class="grey--text">
                  job
                </div>
                <v-btn v-for="(item, index) in contact.social" :key="index" icon>
                  <v-icon size=20>{{ item }}</v-icon>
                </v-btn>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <v-btn icon color="primary">
                  <v-icon size=20>edit</v-icon>
                </v-btn>
                <v-btn icon color="red">
                  <v-icon size=20>delete</v-icon>
                </v-btn>
              </v-card-text>
              <!-- <v-card-actions>
              </v-card-actions> -->
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      contacts: [{
        name: "Mohammadreza Mosalli",
        role: "full-stack javascript developer",
        image: "https://avatars3.githubusercontent.com/u/41260098?s=460&v=4",
        social: [
          "phone",
          "email",
          "event",
          "person"
        ]
      },
      {
        name: "Mohammadreza Mosalli",
        role: "full-stack javascript developer",
        image: "https://avatars3.githubusercontent.com/u/41260098?s=460&v=4",
        social: [
          "phone",
          "email",
          "event",
          "person"
        ]
      },
      {
        name: "Mohammadreza Mosalli",
        role: "full-stack javascript developer",
        image: "https://avatars3.githubusercontent.com/u/41260098?s=460&v=4",
        social: [
          "phone",
          "email",
          "event",
          "person"
        ]
      },
      {
        name: "Mohammadreza Mosalli",
        role: "full-stack javascript developer",
        image: "https://avatars3.githubusercontent.com/u/41260098?s=460&v=4",
        social: [
          "phone",
          "email",
          "event",
          "person"
        ]
      },
      {
        name: "Mohammadreza Mosalli",
        role: "full-stack javascript developer",
        image: "https://avatars3.githubusercontent.com/u/41260098?s=460&v=4",
        social: [
          "phone",
          "email",
          "event",
          "person"
        ]
      },
      {
        name: "Mohammadreza Mosalli",
        role: "full-stack javascript developer",
        image: "https://avatars3.githubusercontent.com/u/41260098?s=460&v=4",
        social: [
          "phone",
          "email",
          "event",
          "person"
        ]
      }
      ]
    }
  },
  methods: {
    getAge (date) {
      return new Date().getFullYear() - date
    }
  }
}

</script>
