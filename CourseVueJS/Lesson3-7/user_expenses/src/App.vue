<template>
  <div id="app">
    <header>
      <h1>User Espenses</h1>
    </header>
    <main>
      <button>
        <label class="border">
          <input class="custom-checkbox" type="checkbox" v-model="showNewRecord" />
          ADD NEW COST
          <div class="showNewRecord" v-if="showNewRecord">
            <add-payment-form @addNewPayment="addData" />
          </div>
        </label>
      </button>
      <div class="content">
        <payments-display :list="paymentsList" />
      </div>
    </main>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
      showNewRecord: false
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
          value: 1000,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.showNewRecord{
  margin-top: 20px;
}
h1 {
  size: 25px;
}
.content {
  margin-top: 30px;
}
</style>
