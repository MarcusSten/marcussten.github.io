<template>
  <div class="block-context-menu">
    <div class="header">{{ contextMenuSettings.header }} {{ currentElements }}</div>
    <div class="content">
        <component :is="contextMenuSettings.name" />
    </div>
    <delete-payment-form />
    <br>
    <edit-payment-form />
    <div class="footer">
      <button class="close" @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
import AddCategory from './AddCategory.vue';
import Auth from './Auth.vue';
import DeletePaymentForm from './DeletePaymentForm.vue';
import EditPaymentForm from './EditPaymentForm.vue';

export default {
  name: "ContextMenuPaymentForm",
  components: { 
   DeletePaymentForm,
   EditPaymentForm,
   Auth, 
   AddCategory },
  props: {
      contextMenuSettings: Object,
  },
  methods: {
      onClose(){
          this.$contextMenu.hide()
      },
  }
};
</script>

<style lang="scss" scoped>
.block-context-menu {
    padding: 10px;
    position: absolute;
    background: #efefef;
}
.close {
    margin-top: 20px;
}
</style>