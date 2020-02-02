<template>
  <v-container>
    <v-layout wrap>
      <!-- title -->
      <v-flex xs12 sm12 md12>
        <v-card-title class="pl-0 ml-0 my-2">
          <h3 class="font-weight-medium text-capitalize">Account</h3>
        </v-card-title>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <!-- title -->
        <h4 class="font-weight-medium text-capitalize my-3">change username</h4>
        <v-divider class="mb-1"></v-divider>
        <!-- description -->
        <p class="font-weight-light grey--text">if you want to change your username, press the button</p>
        <!-- change username form -->
        <v-form v-if="showChangeUsername" v-model="isFormValid" lazy-validation ref="form"
          @submit.prevent="handleChangeUsername">
          <!-- username field -->
          <v-flex xs12 sm12 md6 class="mt-3">
            <v-text-field v-model="username" :rules="usernameRules" placeholder="Username" filled dense></v-text-field>
          </v-flex>

          <!-- change button -->
          <v-btn :loading="loading" :disabled="!isFormValid || loading || username === user.username" text color="green darken-1"
            class="ml-0 mb-5 text-capitalize white--text" type="submit">
            change
          </v-btn>

          <!-- cancel button -->
          <v-btn @click="showChangeUsername = false" text class="ml-0 mb-5 text-capitalize">
            cancel
          </v-btn>
        </v-form>

        <!-- change button -->
        <div v-else>
          <v-btn @click="showChangeUsername = true" class="ml-0 mb-5 text-capitalize white--text" color="grey" depressed>
            change username
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <!-- title -->
        <h4 class="font-weight-medium text-capitalize my-3">disable account</h4>
        <v-divider class="mb-1"></v-divider>
        <!-- description -->
        <p class="font-weight-light grey--text">if you want to change your username, press the button</p>
        <!-- disable Account form -->
        <v-form v-if="showDisableAccount" v-model="isFormValid" lazy-validation ref="form"
          @submit.prevent="">
          <!-- password field -->
          <v-flex xs12 sm12 md6 class="mt-3">
            <v-text-field v-model="password" :rules="passwordRules" placeholder="Password" filled dense></v-text-field>
          </v-flex>

          <!-- disable button -->
          <v-btn :loading="loading" :disabled="!isFormValid || loading" text color="red darken-1"
            class="ml-0 mb-5 text-capitalize white--text" type="submit">
            disable
          </v-btn>

          <!-- cancel button -->
          <v-btn @click="showDisableAccount = false" text class="ml-0 mb-5 text-capitalize">
            cancel
          </v-btn>
        </v-form>

        <!-- disable button -->
        <div v-else>
          <v-btn @click="showDisableAccount = true" color="amber accent-4" class="ml-0 mb-5 text-capitalize white--text">
            disable your account
          </v-btn>
        </div>
      </v-flex>

      <v-flex xs12 sm12 md12>
        <!-- title -->
        <h4 class="font-weight-medium text-capitalize my-3">delete account</h4>
        <v-divider class="mb-1"></v-divider>
        <!-- description -->
        <p class="font-weight-light grey--text">Once you <span class="font-weight-light red--text">delete
            your account</span>, there is no going back. Please be certain.</p>
        <v-spacer></v-spacer>
        <!-- delete account button -->
        <v-btn color="red" class="ml-0 mt-3 text-capitalize white--text">
          delete your account
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data () {
    return {
      showChangeUsername: false,
      showDisableAccount: false,
      username: "",
      password: "",
      isFormValid: true,
      usernameRules: [
        username => !!username || "Username is required",
        username => username.length >= 5 || "Username must be at least 5 characters"
      ],
      passwordRules: [
        password => !!password || "Password is required"
      ]
    }
  },
  created () {
    this.username = this.user.username
  },
  computed: {
    ...mapGetters({
      loading: "loading",
      user: "auth/authUser"
    })
  },
  methods: {
    handleChangeUsername () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("user/changeUsername", {
          username: this.user.username
        })
      }
    },
    hiddenUsername () {
      this.changeUsername = false
    }
  }
}

</script>
