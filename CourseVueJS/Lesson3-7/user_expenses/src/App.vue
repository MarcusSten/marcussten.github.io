<template>
  <div id="app">
    <header>
      <h1>User Espenses</h1>
    </header>
    <main>
    <button v-on:click="visible=!visible">ADD NEW COST</button>
      <div v-show="visible">
        <add-payment-form @addNewPayment="addData" />
      </div>
      <div class="content">
        <payments-display :list="currentElements" />
        <pagination :cur="page" :n="n" :length="paymentsList.length" @paginate="onChangePage" />
      </div>
      <div class="total">Total Costs - {{ getFPV }}</div>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import Pagination from "./components/pagination.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      visible: false,
      cur: 1,
      n: 5,
      page: 1,
    };
  },
  methods: {
    ...mapMutations({
      loadData: 'setPaymentListData',
      addDataToStore: 'addDataToPaymentList'
    }),
    ...mapActions({
      fetchListData: 'fetchData'
    }),
    addData(newPayment) {
      this.paymentsList.push(newPayment);
    },
    onChangePage(p) {
      this.page = p
    },
  },
  computed: {
    ...mapGetters({
      paymentsList:'getPaymentsList'
    }),
    getFPV(){
      return this.$store.getters.getFullPaymentValue
    },
    totalValue() {
      return 0;
    },
    currentElements() {
      const {n, page} = this
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  },
  created() {
    this.fetchListData()
    //this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.addNewCost {
  background: #afcde7;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
  color: white;
  padding: 10px;
}
table {
  margin: 0 auto;
  font-size: 12px;
  border-collapse: collapse;
  text-align: center;
  width: 50%;
}
th {
  background: #afcde7;
  color: white;
  padding: 10px 20px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
}
thead {
  font-size: 16px;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
h1 {
  size: 25px;
}
.content {
  margin-top: 30px;
}
input,
select {
  margin-top: 10px;
  padding: 10px;
}
select {
  width: 130px;
}
button {
  background: #afcde7;
  color: white;
  height: 39px;
  min-width: 100px;
  padding: 10px;
  border: 1px solid gray;
}
button:hover {
  cursor: pointer;
}
.total {
  margin-top: 50px;
}
</style>
