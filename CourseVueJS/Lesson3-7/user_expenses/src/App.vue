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
        <payments-display :list="paymentsList" />
      </div>
      <div>
        <pagination :list="pages" />
      </div>
    </main>
  </div>
</template>

<script>
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
      paymentsList: [],
      pages: [],
      visible: false,
    };
  },
  computed: {
    totalValue() {
      return 0;
    },
  },
  methods: {
    addData(newPayment) {
      this.paymentsList.push(newPayment);
    },
    fetchData() {
      return [
        {
          date: "25.07.2021",
          category: "Sport",
          value: 720,
        },
        {
          date: "01.08.2021",
          category: "Food",
          value: 1450,
        },
        {
          date: "03.08.2021",
          category: "Alcohol",
          value: 450,
        },
        {
          date: "02.08.2021",
          category: "Food",
          value: 2500,
        },
        {
          date: "11.07.2021",
          category: "Sport",
          value: 150,
        },
        {
          date: "22.06.2021",
          category: "Food",
          value: 700,
        },
        {
          date: "30.05.2021",
          category: "Sport",
          value: 368,
        },
        {
          date: "15.07.2021",
          category: "Food",
          value: 190,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
input {
  margin-top: 10px;
  padding: 10px;
}
button {
  background: #afcde7;
  color: white;
  padding: 10px;
  border: 1px solid gray;
}
button:hover {
  cursor: pointer;
}
</style>
