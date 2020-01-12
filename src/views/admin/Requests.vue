<template>
  <v-container>
    <v-layout wrap>
      <!-- title -->
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 mb-4">
          <h3 class="font-weight-medium text-capitalize">requests</h3>
          <v-spacer></v-spacer>
          <Count :limit=8 :total="requests.length" />
        </v-card-title>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Ticket</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in requests" :key="item.name">
                <td>{{ item.ticket }}</td>
                <td>
                  <div v-if="$vuetify.breakpoint.mdAndUp">
                    <v-btn color="green" x-small icon>
                      <v-icon>reply</v-icon>
                    </v-btn>
                    <v-divider class="mx-1" light inset vertical></v-divider>
                    <v-btn x-small icon>
                      <v-icon>visibility</v-icon>
                    </v-btn>
                    <v-divider class="mx-1" inset vertical></v-divider>
                    <v-btn color="red" x-small icon>
                      <v-icon>close</v-icon>
                    </v-btn>
                  </div>
                  <v-menu v-else bottom left>
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" icon small>
                        <v-icon>more_horiz</v-icon>
                      </v-btn>
                    </template>
                    <v-list class="body-2">
                      <v-list-item>
                        <v-list-item-action>
                          <v-icon>security</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          Review and respond to requests
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-action>
                          <v-icon>visibility</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          Details of request
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-action>
                          <v-icon>close</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          Reject request
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="text-center my-5">
          <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Count from "../../components/Count"

export default {
  data () {
    return {
      page: 1,
      requests: [{
        email: "mohamadresaaa@gmail.com",
        ticket: "Account Activation"
      }
      ]
    }
  },
  components: {
    Count
  }
}
</script>
