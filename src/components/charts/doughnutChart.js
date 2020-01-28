import { Doughnut } from "../../lib/baseChart"

export default {
  extends: Doughnut,
  props: {
    labels: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: null
    },
    backgroundColors: {
      type: Array
    }
  },
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: this.backgroundColors,
          data: this.data
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
