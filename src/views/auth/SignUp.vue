<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md3>
        <v-card outlined>
          <v-card-text>
            <!-- title -->
            <h1 class="text-xs-center text-center mt-3 black--text">Sign up to Jraw</h1>
          </v-card-text>
          <!-- register form -->
          <v-form v-model="isFormValid" @submit.prevent=submitSignUp() ref="form" lazy-validation>
            <v-card-text>
              <!-- username field -->
              <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Username"
                outlined
                dense
              ></v-text-field>

              <!-- email field -->
              <v-text-field v-model="email" :rules="emailRules" label="Email" outlined dense></v-text-field>

              <!-- password field -->
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                @click:append="showPassword = !showPassword"
                outlined
                dense
              ></v-text-field>
            </v-card-text>
            <v-card-actions class="mx-5">
              <v-spacer></v-spacer>
              <!-- set loading -->
              <v-btn
                :disabled="!isFormValid"
                color="green"
                class="text-capitalize white--text"
                type="submit"
                block
              >sign up</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
          <v-card-text>
            <p class="font-weight-bold text-xs-center text-center pt-2">
              Already on Jraw?
              <router-link :to="{ name: 'sign_in' }">Sign in</router-link>
            </p>
          </v-card-text>
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

export default {
  data () {
    return {
      isFormValid: true,
      showPassword: false,
      username: "",
      email: "",
      password: "",
      usernameRules: [
        username => !!username || "Username is required",
        username =>
          username.length >= 5 || "Username must be at least 5 characters"
      ],
      emailRules: [
        email => !!email || "Email is required",
        email =>
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) ||
          "Email must be valid"
      ],
      passwordRules: [
        password => !!password || "Password is required",
        password =>
          password.length >= 8 || "Password must be at least 8 characters"
      ]
    }
  },
  methods: {
    submitSignUp () {
      if (this.$refs.form.validate()) {
        console.log("sign up user")
      }
    }
  }
}
</script>
