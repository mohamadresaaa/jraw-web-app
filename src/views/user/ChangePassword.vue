<template>
  <v-container>
      <v-layout wrap>
        <!-- title -->
        <v-flex xs12 sm12 md12>
          <v-card-title>
            <h3 class="font-weight-medium text-capitalize">Change password</h3>
          </v-card-title>
        </v-flex>
        <v-flex xs12 sm12 md12>
          <!-- change password form -->
          <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="">
            <!-- old password field -->
            <v-text-field v-model="oldPassword" :rules="oldPasswordRules" label="Old password"
              :type="showOldPassword ? 'text' : 'password'"
              :append-icon="showOldPassword ? 'visibility' : 'visibility_off'"
              @click:append="showOldPassword = !showOldPassword" outlined dense></v-text-field>
            <!-- new password field -->
            <v-text-field v-model="newPassword" :rules="newPasswordRules" label="New password"
              :type="showNewPassword ? 'text' : 'password'"
              :append-icon="showNewPassword ? 'visibility' : 'visibility_off'"
              @click:append="showNewPassword = !showNewPassword" outlined dense></v-text-field>
            <!-- confirm new password field -->
            <v-text-field v-model="newConfirmPassword" :rules="newConfirmPasswordRules" label="Confirm new password"
              type="password" outlined dense></v-text-field>
            <v-btn color="green" class="ml-0 text-capitalize white--text" type="submit" outlined>
              Change password
            </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      isFormValid: true,
      showOldPassword: false,
      showNewPassword: false,
      oldPassword: "",
      newPassword: "",
      newConfirmPassword: "",
      oldPasswordRules: [
        oldPassword => !!oldPassword || "Old password is required"
      ],
      newPasswordRules: [
        newPassword => !!newPassword || "New password is required",
        newPassword => newPassword.length >= 8 || "New password must be at least 8 characters"
      ],
      newConfirmPasswordRules: [newConfirmPassword => newConfirmPassword === this.newPassword ||
          "Passwords must match"
      ]
    }
  },
  methods: {

  }
}

</script>
