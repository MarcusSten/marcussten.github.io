<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="category" label="category" />
    <v-btn @click="addCategory" name="btnClick">Save</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "AddCategory",
  data(){
    return {
      category: ''
    }
  },
  methods: {
    addCategory() {
      this.$store.commit("addCategoryToList", this.category);
      this.$emit('close')
    }
  }
};
</script>

<style></style>