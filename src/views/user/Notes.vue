<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm12 md12>
        <v-card-title class="px-0 mx-0 my-2">
          <h3 class="font-weight-medium text-capitalize">notes</h3>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" persistent max-width="500px">
            <v-card>
              <v-form v-model="isFormValid" lazy-validation ref="form">
                <v-card-title>
                  <span class="headline">{{ "Title" }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm12 md12>
                        <v-text-field v-model="editedItem.title" :rules="titleRules" label="Title" autofocus>
                        </v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                        <Editor v-model="editedItem.content" :init="editorConfig"></Editor>
                        <v-textarea v-show="false" v-model="editedItem.content" :rules="contentRules" disabled>
                        </v-textarea>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <!-- set close function -->
                  <v-btn color="blue darken-1" text>Cancel</v-btn>
                  <!-- set loading and save function -->
                  <v-btn :disabled="!isFormValid" color="blue darken-1" text>
                    Save</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-card-title>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-btn @click="sortBy('title')" text>
          <v-icon small left>note_add</v-icon>
          <span class="caption text-capitalize">create</span>
        </v-btn>
        <v-btn @click="sortBy('title')" text>
          <v-icon small left>sort_by_alpha</v-icon>
          <span class="caption text-capitalize">sort</span>
        </v-btn>
      </v-flex>

      <v-flex xs12 sm12 md12>
        <v-card v-for="(item, index) in notes" :key="index" class="my-3" outlined>
          <v-layout justify-space-around wrap class="pa-3">
            <v-flex xs6 sm6 md5>
              <div v-show="!$vuetify.breakpoint.smAndDown" class="caption grey--text">Title</div>
              <v-dialog v-model="modal" width="600px">
                <template v-slot:activator="{ on }">
                  <router-link to>
                    <div @click="showNote(item)" class="blue--text font-weight-bold sub-title note-title mt-1">
                      {{ item.title }}
                    </div>
                  </router-link>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ note.title }}</span>
                  </v-card-title>
                  <v-card-text v-html="note.content"></v-card-text>
                  <v-card-actions>
                    <v-btn color="red darken-1" text @click="modal = false">close</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex v-show="!$vuetify.breakpoint.smAndDown" xs12 sm6 md4>
              <div class="caption grey--text">Created at</div>
              <v-chip color="gray" text-color="white" :class="`${ $vuetify.breakpoint.smAndDown ? '' : 'mt-2' }`" dark
                label small>
                <!-- {{ relativeTime(item.createdAt) }} -->
                6 day ago
              </v-chip>
            </v-flex>
            <v-flex xs6 sm6 md3 class="text-center text-xs-center">
              <div v-show="!$vuetify.breakpoint.smAndDown" class="caption grey--text">Actions</div>
              <div :class="`${ $vuetify.breakpoint.smAndDown ? '' : 'mt-2' }`">
                <v-btn @click="editItem(item)" color="primary" icon dark>
                  <v-icon dark>edit</v-icon>
                </v-btn>
                <v-btn @click="deleteItem(item)" color="red" icon dark>
                  <v-icon dark>delete</v-icon>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
  .note-title {
    white-space: nowrap;
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>

<script>
const config = null

export default {
  data () {
    return {
      dialog: false,
      modal: false,
      isFormValid: true,
      editorConfig: config,
      editedItem: {
        index: -1,
        title: "",
        content: ""
      },
      defaultItem: {
        index: -1,
        title: "",
        content: ""
      },
      note: {
        title: "",
        content: ""
      },
      titleRules: [value => !!value || "Title is required"],
      contentRules: [value => !!value || "Content is required"],
      notes: [{
        title: "note one",
        content: "this is note one"
      },
      {
        title: "checked with our payment processor",
        content: "this is note two"
      },
      {
        title: "note three",
        content: "this is note three"
      },
      {
        title: "note four",
        content: "this is note four"
      }
      ]
    }
  }
}

</script>
