<template>
<v-app>
    <BaseBar />
<v-layout wrap>
        <v-flex xs12 sm12 md12 class="pa-2">
            <v-card>
                <v-img src="https://image.freepik.com/free-photo/call-center-operators_53419-1461.jpg" :height="$vuetify.breakpoint.mdAndUp ? '470px' : '295px'">
                    <v-layout column fill-height>
                        <v-card-title>
                            <!-- title -->
                            <h1 class="font-weight-medium white--text text-capitalize mb-3">contact us</h1>
                        </v-card-title>
                    </v-layout>
                </v-img>
                <v-list two-line>
                    <!-- phone -->
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon color="primary">phone</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>(+98) 912-142-5458</v-list-item-title>
                            <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <!-- mail -->
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon color="primary">mail</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>mohamadresaaa@gmail.com</v-list-item-title>
                            <v-list-item-subtitle>Email</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <!-- location -->
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon color="primary">location_on</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>Tehran</v-list-item-title>
                            <v-list-item-subtitle>Iran</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import BaseBar from "../components/header/bars/BaseBar"

export default {
  data () {
    return {
      isFormValid: true,
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  },
  components: {
    BaseBar
  }
}
</script>
