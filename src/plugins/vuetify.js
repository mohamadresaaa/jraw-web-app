import Vue from "vue"
import Vuetify from "vuetify/lib"
import { switchMode } from "../lib/calculateDateTime"

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: "md"
  },
  theme: {
    dark: switchMode()
  }
})
