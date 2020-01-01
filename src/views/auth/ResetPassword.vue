<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md3>
        <v-card v-if="!this.$route.params.code" outlined>
          <v-card-text>
            <!-- title -->
            <h1 class="text-center text-center mt-5">Reset your password</h1>
          </v-card-text>
          <!-- forgot password form -->
          <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent>
            <v-card-text>
              <v-alert class="subtitle-2" color="orange darken-4" text>Enter your user account's verified email address
                and we will
                send you a password reset link</v-alert>
              <!-- email field -->
              <v-text-field v-model="email" :rules="emailRules" label="Email" autofocus dense outlined></v-text-field>
            </v-card-text>
            <v-card-actions class="mx-5">
              <v-spacer></v-spacer>
              <!-- set loading -->
              <v-btn :disabled="!isFormValid" color="green" class="text-capitalize white--text mb-5" type="submit"
                block>Send password reset email</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
        </v-card>

        <v-card v-else outlined>
          <v-card-text class="text-center text-center">
            <v-avatar color="blue accent-4" size="100">
              <img src="https://avatars2.githubusercontent.com/u/41260098?s=400&v=4" alt="mohamadresaaa">
              <!-- <span class="white--text headline">80</span> -->
            </v-avatar>
            <v-spacer></v-spacer>
            <v-chip class="mt-5 subtitle-2" text-color="blue accent-4" label pill outlined>
              mohamadresaaa
            </v-chip>
          </v-card-text>
          <!-- reset password form -->
          <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent>
            <v-card-text>
              <!-- new password field -->
              <v-text-field v-model="password" :rules="passwordRules" label="New password"
                :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                @click:append="showPassword = !showPassword" autofocus dense outlined></v-text-field>

              <!-- confirm password field -->
              <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" label="Confirm password"
                type="password" dense outlined></v-text-field>
            </v-card-text>
            <v-card-actions class="mx-5">
              <v-spacer></v-spacer>
              <v-btn :disabled="!isFormValid" color="green" class="text-capitalize white--text mb-5" type="submit"
                block>reset password</v-btn>
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
