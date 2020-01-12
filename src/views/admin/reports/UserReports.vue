<template>
  <v-container>
    <v-layout wrap>
      <!-- title -->
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 mb-4">
          <h3 class="font-weight-medium text-capitalize">user reports</h3>
          <v-spacer></v-spacer>
          <Count :limit=8 :total="requests.length" />
        </v-card-title>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-simple-table :dark=$switchMode()>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Reason</th>
                <th class="text-left">reporter</th>
                <th class="text-left">user</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in requests" :key="item.name">
                <td>{{ item.reason }}</td>
                <td>{{ item.reporter }}</td>
                <td>{{ item.user }}</td>
                <td>
                  <div v-if="$vuetify.breakpoint.mdAndUp">
                    <v-btn color="green" x-small icon dark>
                      <v-icon dark>reply</v-icon>
                    </v-btn>
                    <v-btn color="black" x-small icon dark>
                      <v-icon dark>visibility</v-icon>
                    </v-btn>
                    <v-btn color="red" x-small icon dark>
                      <v-icon dark>close</v-icon>
                    </v-btn>
                  </div>
                  <v-menu v-else bottom left>
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" color="black" dark icon small>
                        <v-icon>more_horiz</v-icon>
                      </v-btn>
                    </template>
                    <v-list class="body-2">
                      <v-list-item>
                        <v-list-item-action>
                          <v-icon>send</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          Review and respond to reporter
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-action>
                          <v-icon>visibility</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          Details of report
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-action>
                          <v-icon>close</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          Reject report
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
import Count from "../../../components/Count"

export default {
  data () {
    return {
      page: 1,
      requests: [{
        reason: "spam",
        reporter: "mohamadresaaa@gmail.com",
        user: "mohamadresaaamosalli@gmail.com"
      },
      {
        reason: "spam",
        reporter: "mohamadresaaa@gmail.com",
        user: "mohamadresaaamosalli@gmail.com"
      },
      {
        reason: "spam",
        reporter: "mohamadresaaa@gmail.com",
        user: "mohamadresaaamosalli@gmail.com"
      },
      {
        reason: "spam",
        reporter: "mohamadresaaa@gmail.com",
        user: "mohamadresaaamosalli@gmail.com"
      },
      {
        reason: "spam",
        reporter: "mohamadresaaa@gmail.com",
        user: "mohamadresaaamosalli@gmail.com"
      },
      {
        reason: "spam",
        reporter: "mohamadresaaa@gmail.com",
        user: "mohamadresaaamosalli@gmail.com"
      },
      {
        reason: "spam",
        reporter: "mohamadresaaa@gmail.com",
        user: "mohamadresaaamosalli@gmail.com"
      },
      {
        reason: "spam",
        reporter: "mohamadresaaa@gmail.com",
        user: "mohamadresaaamosalli@gmail.com"
      },
      {
        reason: "spam",
        reporter: "mohamadresaaa@gmail.com",
        user: "mohamadresaaamosalli@gmail.com"
      }]
    }
  },
  components: {
    Count
  }
}
</script>
