const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
  },
  methods: {
    getJson(url){
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          })
    },

    addProduct(product) {
      console.log(product);
    }

    // filter(value){
    //   const regexp = new RegExp(value, 'i');
    //   this.filtered = this.allProducts.filter(product => regexp.test(product.product_name));
    //   this.allProducts.forEach(el => {
    //     const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
    //     if(!this.filtered.includes(el)){
    //       block.classList.add('invisible');
    //     } else {
    //       block.classList.remove('invisible');
    //     }
    //   })
    // }
    
  },


  beforeCreate() {

  },

  created() {
    this.getJson(`${API + this.catalogUrl}`)
        .then((data) => {
          console.log(data);
          this.products = data;
        });
  },

  beforeMount() {

  },

  mounted() {

  },

  beforeUpdate() {

  },

  updated() {

  },

  beforeDestroy() {

  },

  destroyed() {

  },
});
