<template>
  <!-- <v-btn class="text-capitalize mr-0" disabled small outlined></v-btn> -->
    <v-chip
      class="text-capitalize"
      label
    >
      limit: {{ limit }}
    <v-divider class="mx-2 grey darken-1" inset vertical></v-divider>
    total: {{ total }}
    </v-chip>
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
