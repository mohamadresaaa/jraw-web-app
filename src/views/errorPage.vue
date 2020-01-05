<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md12>
          <v-card color="#fafafa" elevation="0">
            <v-card-text class="text-xs-center text-center">
              <h1 :class="`error-title ${color}--text display-3 font-weight-bold`">{{ title }}</h1>
              <blockquote class="blockquote">
                {{ message }}
              </blockquote>
            </v-card-text>
            <v-card-actions class="mx-5">
              <v-spacer></v-spacer>
              <v-btn :to="{ name: 'home' }" :color="color" class="text-capitalize white--text" outlined>
                <span class="ml-2">back to home</span>
                <v-icon right>keyboard_arrow_right</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style lang="scss">
  .error-title {
    color: #333333;
    text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0, 0, 0, 0.15);
  }
</style>

<script>
// import BaseBar from "./../../components/bars/BaseBar"

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
      type: String,
      required: true
    }
  }
}

</script>
