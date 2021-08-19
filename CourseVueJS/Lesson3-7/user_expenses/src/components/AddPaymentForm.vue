<template>
  <div>
    <input type="text" v-model="date" placeholder="date" />
    <input type="number" v-model.number="value" placeholder="value" />
    <select v-model="category" v-if="options">
        <option v-for="option in options" :value="option" :key="option">
        {{ option }}
        </option>
    </select>
    <button @click="onSave" :disabled="!category">Save</button>
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
            const m = today.getMonth() + 1;
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
            this.$store.commit('addDataToPaymentList', data)
            this.$modal.hide()
        },
    },
    async created(){
        await this.fetchCategoryList()
        if(this.$route.name ==="AddPaymentFromUrl") {
            this.value = Number(this.$route.query?.value) || 0,
            this.category = this.$route.params?.category || ''
        }
    }
};

</script>