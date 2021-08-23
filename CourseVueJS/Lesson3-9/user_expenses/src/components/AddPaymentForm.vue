<template>
  <v-card class="text-left pa-8">
      <v-text-field v-model="date" label="date" />
      <v-text-field v-model.number="value" label="value" />
      <v-select v-model="category" label="category" :items="options" />
      <v-btn @click="onSave" name="btnClick">Save</v-btn>
  </v-card>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

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
        ...mapMutations([
            'addDataToPaymentList'
        ]),
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
            this.addDataToPaymentList(data)
            this.$emit('close')
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