<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-1">
          <v-card-text>
            <!-- title -->
            <h1 class="text-xs-center text-center">Sing in to Jraw</h1>
          </v-card-text>
          <!-- login form -->
          <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent>
            <v-card-text>
              <!-- email and username field -->
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email or Username"
                autofocus
                outlined
              ></v-text-field>

              <!-- password field -->
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                @click:append="showPassword = !showPassword"
                outlined
              ></v-text-field>

              <p class="font-weight-bold primary--text">
                <router-link :to="{ name: 'forgot_password' }">Forgot password?</router-link>
              </p>
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
              >sign in</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
          <v-card-text>
            <p class="font-weight-bold text-xs-center text-center primary--text">
              <router-link :to="{ name: 'sign_up' }">Create an account</router-link>
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
      email: "",
      password: "",
      emailRules: [email => !!email || "Email or Username is required"],
      passwordRules: [password => !!password || "Password is required"]
    }
  }
}
</script>
