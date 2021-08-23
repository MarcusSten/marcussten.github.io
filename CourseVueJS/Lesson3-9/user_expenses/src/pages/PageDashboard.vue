<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <div class="text-h5 text-sm-h3">My Personal cost</div>
        <br>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on">
              Add payment <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <add-payment-form @close="dialog=false"/>
          </v-card>
        </v-dialog>

        <payments-display :list="currentElements" />

        <pagination
          :cur="page"
          :n="n"
          :length="paymentsList.length"
          @paginate="onChangePage"
        />

        <v-btn color="teal" dark v-on="on" @click="addCategory">
          Add category <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        CHART
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import AddPaymentForm from '../components/AddPaymentForm.vue';
import Pagination from "../components/Pagination.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Pagination,
    AddPaymentForm
  },
  data() {
    return {
      on: false,
      dialog: false,
      visible: false,
      cur: 1,
      n: 5,
      page: 1,
      category: '',
      showPaymentForm: false,
      modalSettings: ""
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
      this.curPage = p;
    },
    addCategory(){
      this.$store.commit('addCategoryToList', this.category)
    },
    showPaymentFormFn(){
      this.$modal.show('AddPaymentForm', {header: "Add payment Form"})
    },
    showAddCategoryForm(){
      this.$modal.show('addCategory', {header: "Add new category Form"})
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
  async created() {
    await this.fetchListData();
    if (this.$route.params?.page) {
        this.onChangePage(this.$route.params.page)
    }
  },
};
</script>

<style module lang="scss">
.wrapper {
  left: 300px;
  display: block;
  height: 100%
}
</style>

<style lang="scss">
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
.th-context {
  width: 20%;
}
.context-btn {
  position: relative;
  border: none;
}
</style>
