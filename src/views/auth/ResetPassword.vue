<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-1">
          <v-card-text>
            <!-- title -->
            <h1 class="text-center text-center mt-5">Reset your password</h1>
          </v-card-text>
          <!-- forgot password form -->
          <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent>
            <v-card-text>
              <v-alert
                text
                color="orange darken-4"
              >Enter your user account's verified email address and we will send you a password reset link</v-alert>
              <!-- email field -->
              <v-text-field v-model="email" :rules="emailRules" label="Email" autofocus outlined></v-text-field>
            </v-card-text>
            <v-card-actions class="mx-5">
              <v-spacer></v-spacer>
              <!-- set loading -->
              <v-btn
                :disabled="!isFormValid"
                color="green"
                class="text-capitalize white--text mb-5"
                type="submit"
                block
              >Send password reset email</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      isFormValid: true,
      email: "",
      emailRules: [
        email => !!email || "Email is required",
        email =>
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) ||
          "Email must be valid"
      ]
    }
  }
}
</script>
