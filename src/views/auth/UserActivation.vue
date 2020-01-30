<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm12 md4>
                <v-card outlined>
                    <v-card-text>
                        <h2 class="text-center text-xs-center">User is getting activated...</h2>
                        <div class="text-center text-xs-center mt-5">
                            <v-progress-circular :size="50" color="#00E676" indeterminate></v-progress-circular>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  created () {
    this.$store.dispatch("account/activation", this.$route.params.code)
  }
}
</script>
