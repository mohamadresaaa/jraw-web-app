<template>
  <v-snackbar v-if="message" v-model="snackbar" :class="`font-weight-medium font-weight-bold ${ !message.color ? 'amber' : message.color}--text`">
    {{ message.content }}
    <v-btn @click="closeMessage" icon>
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data: () => ({
    snackbar: false
  }),
  watch: {
    // If message is not null, show message snackbar
    message (value) {
      if (value !== null) {
        this.snackbar = true
      }
    }
  },
  computed: {
    ...mapGetters(["message"])
  },
  methods: {
    closeMessage () {
      this.$store.dispatch("clearMessage")
    }
  }
}
</script>
