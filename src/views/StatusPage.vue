<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md12>
          <v-card-text class="text-xs-center text-center">
            <h1
              :class="`error-title ${!color && $vuetify.theme.isDark ? 'grey' : color}--text display-3 font-weight-bold`">
              {{ title }}</h1>
            <blockquote class="blockquote">
              {{ message }}
            </blockquote>
          </v-card-text>
          <v-card-actions class="mx-5">
            <v-spacer></v-spacer>
            <v-btn :to="{ name: 'home' }" :color="!color && !$vuetify.theme.isDark ? 'grey darken-3' : color"
              class="text-capitalize white--text" outlined>
              <span class="ml-2">back to home</span>
              <v-icon right>keyboard_arrow_right</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style>
  .error-title {
    color: #333333;
    text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0, 0, 0, 0.15);
  }
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    color: {
      type: String
    }
  }
}
</script>
