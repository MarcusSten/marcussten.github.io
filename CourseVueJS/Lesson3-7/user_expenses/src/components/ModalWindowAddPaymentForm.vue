<template>
  <div class="wrapper">
    <div class="header">{{ modalSettings.header }}</div>
    <div class="content">
        <component :is="modalSettings.name" />
    </div>
    <div class="footer">
      <button class="close" @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
import AddCategory from './AddCategory.vue';
import Auth from './Auth.vue';
export default {
  name: "ModalWindow",
  components: { 
   AddPaymentForm: ()=>import(/* webpackChunkName: 'AddPaymentForm' */'./AddPaymentForm.vue'),
   Auth, 
   AddCategory },
  props: {
      modalSettings: Object
  },
  methods: {
      onClose(){
          this.$modal.hide()
      }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 20px;
    position: absolute;
    top:20%;
    left: 30%;
    background: #efefef;
}
.close {
    margin-top: 20px;
}
</style>