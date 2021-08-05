<template>
  <div class="container">
           <div>
             <button v-if="page != 1" @click="page--"> Prev </button>
             <button v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
             <button @click="page++" v-if="page < pages.length"> >> </button>
           </div>
         </div>
</template>

<script>
export default {
  name: "Pagination",
  data(){
    return {
      page: 1,
      perPage: 5,
      pages: [],
    }
  },
  methods: {
    setPages () {
       let numberOfPages = Math.ceil(this.paymentsList.length / this.perPage);
       for (let index = 1; index <= numberOfPages; index++) {
         this.pages.push(index);
       }
     },
     paginate (paymentsList) {
       let page = this.page;
       let perPage = this.perPage;
       let from = (page * perPage) - perPage;
       let to = (page * perPage);
       return  paymentsList.slice(from, to);
     },
  },
  watch: {
    paymentsList () {
      this.setPages();
    }
  },
  computed: {
     displayedPosts () {
       return this.paginate(this.paymentsList);
     }
   },
};
</script>


