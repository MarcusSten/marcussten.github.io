<template>
  <div>
    <input type="text" v-model="date" placeholder="date" />
    <input type="number" v-model.number="value" placeholder="value" />
    <select v-model="category" v-if="options">
        <option v-for="option in options" :value="option" :key="option">
        {{ option }}
        </option>
    </select>
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'AddPaymentForm',
    data() {
        return {
            value: "",
            category: "",
            date: "",
        };
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate();
            const m = today.getMpnth() + 1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`;
        },
        options(){
            return this.$store.getters.getCategories
        },
    },
    methods: {
        ...mapActions([
            'fetchCategoryList'
        ]),
        onSave() {
            const{ value, category } = this
            const data = {
                date: this.date || this.getCurrentDate,
                value,
                category
            }
            this.$emit('addNewPayment', data)
        },
    },
    created(){
        this.fetchCategoryList()
    }
};

</script>