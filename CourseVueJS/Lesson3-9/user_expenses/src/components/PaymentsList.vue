<template>
  <v-data-table
    :headers="headers"
    :items="payments"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-dialog
          v-model="dialog"
          max-width="450px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="teal"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              ADD NEW COST
              <v-icon dark small>
              mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-text-field
                  v-model="editedItem.date"
                  label="Payment date"
                ></v-text-field>
                <v-select
                  v-model="editedItem.category"
                  label="Payment category"
                  :items="getCategories"
                ></v-select>
                <v-text-field
                  v-model="editedItem.price"
                  label="Payment amount"
                ></v-text-field>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red accent-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="teal"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="480px">
          <v-card>
            <v-card-title class="text-h6">Are you sure you want to delete this payment?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="red accent-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[forEslint]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="red accent-1"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: '#', align: 'start', sortable: false, value: 'id' },
      { text: 'Date', value: 'date' },
      { text: 'Category', value: 'category' },
      { text: 'Value', value: 'price' },
      { text: '', value: 'actions', sortable: false }
    ],
    payments: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      date: '',
      category: '',
      price: ''
    },
    defaultItem: {
      id: '',
      date: '',
      category: '',
      price: ''
    }
  }),

  computed: {
    ...mapGetters([
      'getPaymentsList',
      'getCategories',
      'getPaymentsListLastId'
    ]),
    forEslint () {
      return 'item.actions'
    },
    formTitle () {
      return this.editedIndex === -1 ? 'New Payment' : 'Edit Payment'
    },
    getCurrentDate () {
      const today = new Date()
      const day = today.getDate()
      const month = today.getMonth()
      const year = today.getFullYear()
      return `${day}.${month < 10 ? '0' + (month + 1) : month + 1}.${year}`
    },
    getLastId () {
      const lastItem = this.payments[this.payments.length - 1]
      return lastItem.id + 1
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    ...mapMutations([
      'deletePayment',
      'updatePaymentsList'
    ]),
    initialize () {
      this.payments = this.getPaymentsList
    },
    editItem (item) {
      this.editedIndex = this.payments.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      this.editedIndex = this.payments.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      // this.deletePayment(this.editedIndex)
      this.payments.splice(this.editedIndex, 1)
      this.deletePayment(this.payments)
      this.closeDelete()
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      const newItem = {
        id: this.getLastId,
        date: this.getCurrentDate,
        category: this.editedItem.category,
        price: this.editedItem.price
      }
      if (this.editedIndex > -1) {
        Object.assign(this.payments[this.editedIndex], this.editedItem)
      } else {
        this.payments.push(newItem)
      }
      this.updatePaymentsList(this.payments)
      this.close()
    }
  }
}
</script>

<style>

</style>
