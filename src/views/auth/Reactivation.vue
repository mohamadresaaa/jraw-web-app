<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md3>
        <v-card outlined>
          <v-card-text>
            <!-- title -->
            <h1 class="text-xs-center text-center mt-3">Account reactivation</h1>
          </v-card-text>
          <!-- login form -->
          <v-form v-model="isFormValid" @submit.prevent=submitReactivation() ref="form" lazy-validation>
            <v-card-text>
              <!-- email and username field -->
              <v-text-field v-model="email" :rules="emailRules" label="Email or Username" autofocus outlined dense>
              </v-text-field>
            </v-card-text>
            <v-card-actions class="mx-5 mb-5">
              <v-spacer></v-spacer>
              <v-btn :disabled="!isFormValid || loading" :loading="loading" color="green"
                class="text-capitalize white--text" type="submit" block>send reactivation link</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
  a {
    text-decoration: none;
  }
</style>

<script>
import { mapGetters } from "vuex"

export default {
  data () {
    return {
      isFormValid: true,
      email: "",
      emailRules: [email => !!email || "Email or Username is required"]
    }
  },
  computed: {
    ...mapGetters(["loading"])
  },
  methods: {
    submitReactivation () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("account/reactivation", {
          email: this.email
        })
      }
    }
  }
}
</script>
