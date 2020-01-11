<template>
  <v-btn class="text-capitalize mr-0 grey darken-3 white--text" small outlined>limit: {{ limit }}
    <v-divider class="mx-2 grey darken-1" vertical></v-divider>
    total: {{ total }}</v-btn>
</template>

<script>
export default {
  props: {
    limit: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  }
}
</script>
