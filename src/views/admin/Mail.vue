<template>
  <v-container>
    <v-layout wrap>
      <!-- title -->
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 mb-4">
          <h3 class="font-weight-medium text-capitalize">Mail</h3>
          <v-spacer></v-spacer>
          <v-chip class="text-capitalize" label>
            <v-icon left>event</v-icon> {{ relativeTime(new Date(1614777557 * 1000)) }}
            <v-divider class="mx-2 grey darken-1" inset vertical></v-divider>
            <v-icon>attach_money</v-icon> 9599 IRR
          </v-chip>
        </v-card-title>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat>
              <v-text-field class="mt-6" label="Search..." clearable solo-inverted dense></v-text-field>
              <v-spacer></v-spacer>
              <v-select :items="items" class="mt-6 mx-2" label="Filter" dense outlined></v-select>
              <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Send message</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <v-combobox v-model="model" :filter="filter" :hide-no-data="!search" :items="items"
                            :search-input.sync="search" hide-selected label="Search for an option" multiple small-chips
                            outlined>
                            <template v-slot:no-data>
                              <v-list-item>
                                <span class="subheading">Create</span>
                                <v-chip label small>
                                  {{ search }}
                                </v-chip>
                              </v-list-item>
                            </template>
                            <template v-slot:selection="{ attrs, item, parent, selected }">
                              <v-chip v-if="item === Object(item)" v-bind="attrs" :input-value="selected" label small>
                                <span class="pr-2">
                                  {{ item.text }}
                                </span>
                                <v-icon small @click="parent.selectItem(item)">close</v-icon>
                              </v-chip>
                            </template>
                            <template v-slot:item="{ index, item }">
                              <v-text-field v-if="editing === item" v-model="editing.text" autofocus flat
                                background-color="transparent" hide-details solo @keyup.enter="edit(index, item)">
                              </v-text-field>
                              <v-chip v-else :color="`${item.color} lighten-3`" dark label small>
                                {{ item.text }}
                              </v-chip>
                              <v-spacer></v-spacer>
                              <v-list-item-action @click.stop>
                                <v-btn icon @click.stop.prevent="edit(index, item)">
                                  <v-icon>{{ editing !== item ? 'edit' : 'done' }}</v-icon>
                                </v-btn>
                              </v-list-item-action>
                            </template>
                          </v-combobox>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-textarea outlined label="message" auto-grow rows="3">
                          </v-textarea>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <header>Message type</header>
                          <v-radio-group v-model="type" row>
                            <v-radio label="voice" value="voice"></v-radio>
                            <v-radio label="text" value="text"></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="text-capitalize" color="red darken-1" @click="close" text>Cancel</v-btn>
                    <v-btn class="text-capitalize" color="green darken-1" @click="save" dark>send</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon @click="deleteItem(item)" color="red" small>
              cancel
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reload</v-btn>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-speed-dial v-model="dialog" :bottom="true" :right="true" fixed>
        <template v-slot:activator>
          <v-btn v-model="dialog" color="blue darken-2" dark fab>
            <v-icon>send</v-icon>
          </v-btn>
        </template>
      </v-speed-dial>
  </v-container>
</template>

<script>
import {
  relativeTime
} from "../../lib/dateTime"

export default {
  data () {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      activator: null,
      attach: null,
      editing: null,
      index: -1,
      menu: false,
      model: [],
      x: 0,
      search: null,
      y: 0,
      dialog: false,
      headers: [{
        text: "Id",
        align: "start",
        sortable: false,
        value: "name"
      },
      {
        text: "Status",
        value: "calories",
        sortable: false
      },
      {
        text: "Actions",
        align: "center",
        value: "action",
        sortable: false
      }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        numbers: [],
        message: 0,
        type: null
      },
      defaultItem: {
        numbers: [],
        message: 0,
        type: null
      },
      messages: [{
        messageId: "5439",
        status: "1"
      }]
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? "New Item" : "Edit Item"
    }
  },
  watch: {
    model (val, prev) {
      if (val.length === prev.length) return

      this.model = val.map(v => {
        if (typeof v === "string") {
          v = {
            text: v
          }
          this.items.push(v)
        }
        return v
      })
    },
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    edit (index, item) {
      if (!this.editing) {
        this.editing = item
        this.index = index
      } else {
        this.editing = null
        this.index = -1
      }
    },
    filter (item, queryText, itemText) {
      if (item.header) return false

      const hasValue = val => val != null ? val : ""

      const text = hasValue(itemText)
      const query = hasValue(queryText)

      return text.toString()
        .toLowerCase()
        .indexOf(query.toString().toLowerCase()) > -1
    },
    initialize () {
      this.desserts = [{
        name: "Frozen Yogurt",
        calories: 159
      },
      {
        name: "Ice cream sandwich",
        calories: 237
      },
      {
        name: "Eclair",
        calories: 262
      },
      {
        name: "Cupcake",
        calories: 305
      },
      {
        name: "Gingerbread",
        calories: 356
      },
      {
        name: "Jelly bean",
        calories: 375
      },
      {
        name: "Lollipop",
        calories: 392
      },
      {
        name: "Honeycomb",
        calories: 408
      },
      {
        name: "Donut",
        calories: 452
      },
      {
        name: "KitKat",
        calories: 518
      }
      ]
    },
    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm("Are you sure you want to delete this item?") && this.desserts.splice(index, 1)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    relativeTime
  }
}

</script>
