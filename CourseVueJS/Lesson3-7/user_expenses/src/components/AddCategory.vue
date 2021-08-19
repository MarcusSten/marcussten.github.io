<template>
  <div>
    <input v-model="category" placeholder="category" />
    <button @click="addCategory">addCategory</button>
  </div>
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
    }
  }
};
</script>

<style></style>