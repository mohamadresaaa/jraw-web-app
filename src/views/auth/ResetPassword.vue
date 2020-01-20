<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md3>
        <v-card v-if="!this.$route.params.code" outlined>
          <v-card-text>
            <!-- title -->
            <h1 class="text-center text-center mt-5">Reset your password</h1>
          </v-card-text>
          <!-- password recovery form -->
          <v-form @submit.prevent="submitPasswordRecovery()" v-model="isFormValid" ref="form" lazy-validation>
            <v-card-text>
              <v-alert class="subtitle-2" color="orange darken-4" text>Enter your user account's verified email address
                and we will
                send you a password reset link</v-alert>
              <!-- email field -->
              <v-text-field v-model="email" :rules="emailRules" label="Email or Username" autofocus dense outlined></v-text-field>
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
            <h1 class="text-center text-center mt-5">Reset password</h1>
            <v-spacer></v-spacer>
            <v-chip v-if="email" @click:close="$router.push({ name: 'reset_password' })" class="mt-5" label close small>
              <v-icon left size="18">account_circle</v-icon>
              {{ email }}
            </v-chip>
          </v-card-text>
          <!-- reset password form -->
          <v-form @submit.prevent="submitResetPassword()" v-model="isFormValid" ref="form" lazy-validation>
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
      code: "",
      password: "",
      confirmPassword: "",
      emailRules: [ email => !!email || "Email or Username is required" ],
      passwordRules: [
        password => !!password || "Password is required",
        password =>
          password.length >= 8 || "Password must be at least 8 characters"
      ],
      confirmPasswordRules: []
    }
  },
  created () {
    if (this.$route.params.code) {
      this.code = this.$route.params.code
      this.$store.dispatch("auth/validationCode", this.code).then(email => (this.email = email))
    }
  },
  methods: {
    submitPasswordRecovery () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("auth/passwordRecovery", {
          email: this.email
        })
      }
    },
    submitResetPassword () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("auth/resetPassword", {
          code: this.code,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
      }
    }
  }
}

</script>
