<template>
  <v-card elevation="0">
    <v-container>
      <v-layout wrap>
        <v-flex xs12 sm12 md12>
          <v-carousel cycle :height="`${$vuetify.breakpoint.lgAndUp ? '500' : '300'}`" hide-delimiter-background
            show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.image">
              <v-sheet tile color="gray">
                <v-row style="height:170%" align="center" justify="center">
                  <div class="title pa-4">{{ slide.title }}</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <!-- <v-flex xs12 sm12 md12>
          <v-card-title>
            <h3 class="font-weight-medium text-capitalize ma-3">categories</h3>
          </v-card-title>
          <v-card-text>
            <v-sheet class="mx-auto" elevation="1">
              <v-slide-group mandatory show-arrows>
                <v-slide-item v-for="(item, index) in categories" :key="index" v-slot:default="{ active, toggle }">
                  <v-card :color="item.color" class="ma-5" height="150" width="150" @click="toggle">
                    <v-row class="fill-height" align="center" justify="center">
                      <p class="white--text title font-weight-bold text-capitalize ma-3">{{ item.title }}</p>
                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-card-text>
        </v-flex> -->
        <v-flex xs12 sm12 md12>
          <v-layout wrap>
            <v-flex xs12 sm12 md12>
              <v-card-title>
                <h3 class="font-weight-medium text-capitalize ma-3">last articles</h3>
              </v-card-title>
            </v-flex>
            <v-flex v-for="(item, index) in 8" :key="index" xs12 sm6 md3>
              <v-card class="ma-4" outlined>
                <v-list-item>
                  <v-list-item-avatar color="grey"></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                    <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

                <v-card-text>
                  Visit ten places on our planet that are undergoing the biggest changes today.
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="deep-purple accent-4">
                    Read
                  </v-btn>
                  <v-btn text color="deep-purple accent-4">
                    Bookmark
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex"

export default {
  data () {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: [
        {
          title: "An Introduction to Web Scraping with Puppeteer.",
          image: "https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/17622/cover-REDESIGN-WebpackDependencies-Luke_Newsletter-627dfc180ba09f35679c9029e6b52001.png"
        },
        {
          title: "How to create a real-world Node CLI app with Node",
          image: "https://cdn-media-1.freecodecamp.org/images/0*2mHsgB-JH_yxlRev.png"
        },
        {
          title: "Introduction to Webpack",
          image: "https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/17622/cover-REDESIGN-WebpackDependencies-Luke_Newsletter-627dfc180ba09f35679c9029e6b52001.png"
        }
      ]
    }
  },
  computed: {
    ...mapState({
      categories: state => state.category.items
    })
  },
  created () {
    this.$store.dispatch("category/fetchCategories")
  }
}
</script>
