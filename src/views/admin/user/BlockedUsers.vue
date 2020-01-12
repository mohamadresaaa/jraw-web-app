<template>
  <v-container>
    <v-layout wrap>
      <!-- title -->
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 mb-4">
          <h3 class="font-weight-medium text-capitalize">blocked users</h3>
          <v-spacer></v-spacer>
          <Count :limit=8 :total="users.length" />
        </v-card-title>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-text-field label="Search..." clearable solo-inverted dense></v-text-field>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Username</th>
                <th class="text-left">Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item.name">
                <td>{{ item.username }}</td>
                <td>{{ item.email }}</td>
                <td>
                  <div v-if="$vuetify.breakpoint.mdAndUp">
                    <v-divider class="mx-1" light inset vertical></v-divider>
                    <v-btn color="black" x-small icon dark>
                      <v-icon dark>visibility</v-icon>
                    </v-btn>
                    <v-divider class="mx-1" inset vertical></v-divider>
                    <v-btn color="primary" x-small icon dark>
                      <v-icon dark>lock_open</v-icon>
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
                          <v-icon>visibility</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          Details this user
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-action>
                          <v-icon>lock_open</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          Unblock this user
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
      users: [{
        username: "mohamadresaaa",
        email: "mohamadresaaa@gmail.com"
      },
      {
        username: "irann_1",
        email: "mohamadresaaa@gmail.com"
      },
      {
        username: "mosalli4738",
        email: "mohamadresaaa@gmail.com"
      },
      {
        username: "irann_1",
        email: "mohamadresaaa@gmail.com"
      },
      {
        username: "mosalli4738",
        email: "mohamadresaaa@gmail.com"
      },
      {
        username: "mosalli4738",
        email: "mohamadresaaa@gmail.com"
      },
      {
        username: "irann_1",
        email: "mohamadresaaa@gmail.com"
      },
      {
        username: "mosalli4738",
        email: "mohamadresaaa@gmail.com"
      }
      ]
    }
  },
  components: {
    Count
  }
}
</script>
