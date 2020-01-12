<template>
  <v-container>
    <v-layout wrap>
      <!-- title -->
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 mb-4">
          <h3 class="font-weight-medium text-capitalize">users</h3>
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
                <th class="text-left">Roles</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item.name">
                <td>{{ item.username }}</td>
                <td>
                  <v-chip v-for="(role, index) in item.roles" :key="index" class="mr-2" label
                    :small="$vuetify.breakpoint.mdAndUp" :x-small="$vuetify.breakpoint.smAndDown">
                    {{ role }}
                  </v-chip>
                </td>
                <td>
                  <div v-if="$vuetify.breakpoint.mdAndUp">
                    <v-btn color="primary" x-small icon>
                      <v-icon>security</v-icon>
                    </v-btn>
                    <v-divider class="mx-1" light inset vertical></v-divider>
                    <v-btn x-small icon>
                      <v-icon>visibility</v-icon>
                    </v-btn>
                    <v-divider class="mx-1" inset vertical></v-divider>
                    <v-btn color="red" x-small icon>
                      <v-icon>block</v-icon>
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
                          Change access level
                        </v-list-item-content>
                      </v-list-item>
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
                          <v-icon>block</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          Block this user
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
        roles: ["admin", "user"]
      },
      {
        username: "mosalli4738",
        roles: ["user"]
      },
      {
        username: "irann_1",
        roles: ["user"]
      },
      {
        username: "mosalli4738",
        roles: ["user"]
      },
      {
        username: "irann_1",
        roles: ["user"]
      },
      {
        username: "mosalli4738",
        roles: ["user"]
      },
      {
        username: "irann_1",
        roles: ["user"]
      },
      {
        username: "mosalli4738",
        roles: ["user"]
      }
      ]
    }
  },
  components: {
    Count
  }
}
</script>
