<template>
  <div class="container">
           <div @click="onClick(cur - 1)">Prev</div>
           <div class="page" v-for="page in amount" :key="page" @click="onClick(page)">
             {{ page }}
           </div>
           <div @click="onClick(cur + 1)">Next</div>
             
         </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: {
      type: Number,
      default: 5,
    },
    cur: Number,
  },
  methods: {
    onClick(p) {
      if(p < 1 || p > this.amount) {
        return
      }
      this.$emit("paginate", p)
    }
  },
  computed: {
     amount() {
       return Math.ceil(this.length / this.n)
     }
   },
};
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
    & > div {
      cursor: pointer;
      margin: 10px;
      &.active {
        color: gray;
      }
  }
  }
</style>


