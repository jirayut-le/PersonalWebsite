<template lang= "html">
    <div class="columns" id="data">
        <div class="column is-2"></div>
        <div class="column is-8">
          <div class="columns">
              <aside class="menu column is-3">
                <p class="menu-label">
                  Skills
                </p>
                <ul class="menu-list" v-for="skill in skills">
                  <li><a>{{ skill.data }}</a></li>
                </ul>
              </aside>
            <div id="chart" class="column is-9">
                <chart :type="'polarArea'" :data="pieData" :options="options"></chart>
            </div>
          </div>
        </div>
        <div class="column is-2"></div>
    </div>
</template>

<script scoped>
import Chart from 'vue-bulma-chartjs'
export default {
  components: {
    Chart
  },
  data () {
    return {
      programing: ['Java', 'Javascript', 'C++', 'Html', 'CSS'],
      frameworks: ['Vue.js', 'Bulma'],
      designs: ['Photoshop', 'Illustrator', 'Sketch'],
      labels: ['Java', 'Javascript', 'C++', 'Html', 'CSS'],
      data: [70, 60, 40, 60, 50],
      skills: [
        { data: 'Programming' },
        { data: 'Framework' },
        { data: 'Design' }
      ],
      options: {
        segmentShowStroke: false
      },
      backgroundColor: [
        '#1fc8db',
        '#fce473',
        '#42afe3',
        '#ed6c63',
        '#97cd76'
      ]
    }
  },
  computed: {
    pieData () {
      return {
        labels: this.labels,
        datasets: [{
          data: this.data,
          backgroundColor: this.backgroundColor
        }]
      }
    }
  }
}
</script>

<style scoped>
#chart {
  padding: 50px;
  padding-top: 0px;
}
</style>
