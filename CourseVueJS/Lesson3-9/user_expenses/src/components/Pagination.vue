

<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="n"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data () {
      return {
        page: 1,
      }
    },
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


