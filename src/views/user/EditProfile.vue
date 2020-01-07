<template>
  <v-card>
    <v-container>
      <v-layout wrap>
        <!-- title -->
        <v-flex xs12 sm12 md12>
          <v-card-title>
            <h3 class="font-weight-medium text-capitalize">Edit profile</h3>
          </v-card-title>
        </v-flex>
        <v-flex xs12 sm3>
          <!-- avatar -->
          <v-responsive class="mx-2">
            <v-avatar tile size="185" class="blue lighten-2">
              <!-- <div v-if="!user.avatar" class="title text-truncate white--text">
                                    {{ user.username }}
                                </div> -->
              <img src="https://avatars3.githubusercontent.com/u/41260098?s=460&v=4" alt="">
            </v-avatar>
          </v-responsive>
          <v-spacer></v-spacer>

          <!-- input avatar upload  -->
          <input ref="fileInput" style="display:none" type="file">
          <v-btn @click="$refs.fileInput.click()" color="blue darken-1" class="text-capitalize white--text ml-2 my-2"
            :style="`${false ? '' : 'width: 185px;' }`" outlined>
            upload
          </v-btn>
          <v-btn color="red darken-1" class="text-capitalize white--text ml-2 my-2" outlined>
            remove
          </v-btn>
        </v-flex>
        <v-flex xs12 sm9>
          <!-- change profile form -->
          <v-form @submit.prevent="">
            <!-- full name -->
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="First name" outlined dense></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Last name" outlined dense></v-text-field>
              </v-col>
            </v-row>
            <!-- bio -->
            <v-textarea label="Bio like education, work, relationships, and death..." outlined dense></v-textarea>

            <!-- birthday -->
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40"
              transition="scale-transition" offset-y full-width min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field label="Birthday" prepend-inner-icon="event" readonly v-on="on" outlined dense>
                </v-text-field>
              </template>
              <v-date-picker ref="picker" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01">
              </v-date-picker>
            </v-menu>

            <!-- description -->
            <p class="font-weight-light grey--text">All of the fields on this page are optional and
              can
              be deleted at any time, and by filling
              them out, you're giving us consent to share this data wherever your user profile
              appears.</p>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="green darken-1" class="ml-0 text-capitalize white--text" outlined>
              save profile
            </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    menu: false
  }),
  watch: {
    menu (value) {
      value && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"))
    }
  }
}

</script>
