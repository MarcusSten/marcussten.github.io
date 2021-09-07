<template>
  <v-row>
    <v-col class="col-6">
      <PaymentsList />
    </v-col>
    <v-col class="pt-10 col-4">
      <Chart :chartData="datacollection" />
    </v-col>
    <v-col class="pt-10 col-4">
      <AddCategory />
    </v-col>

  </v-row>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import Chart from '../components/Chart.vue'
import { mapGetters } from 'vuex'
import AddCategory from '../components/AddCategory.vue'

export default {
  components: {
    PaymentsList,
    Chart,
    AddCategory
  },
  data () {
    return {
      datacollection: null
    }
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: this.getCategories,
        datasets: [{
          label: 'Costs by categories',
          data: this.getData(),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(50, 205, 86)',
            'rgb(55, 60, 220)'
          ],
          hoverOffset: 4
        }]
      }
    },
    getTotalPrice (cat) {
      const data = this.getPaymentsList
      const filteredData = data.filter(item => item.category === cat)
      const totalPrice = filteredData.reduce((acc, cur) => acc + Number(cur.price), 0)
      return totalPrice
    },
    getData () {
      const data = this.getCategories.map((cur) => {
        return this.getTotalPrice(cur)
      })
      return data
    }
  },
  computed: {
    ...mapGetters([
      'getCategories',
      'getPaymentsList'
    ])
  },
  beforeMount () {
    this.fillData()
  },
  mounted () {
    this.getData()
  }
}
</script>

<style>

</style>
