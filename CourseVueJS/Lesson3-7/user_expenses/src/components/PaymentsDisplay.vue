<template>
  <div class="list">
    <transition name="fade">
      <context-menu-payment-form v-if="contextMenuShown" :contextMenuSettings="contextMenuSettings"/>
    </transition>
    <table id="firstTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Category</th>
          <th>Cost</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in list" :key="idx">
            <th class="th-number">{{ item.id }}</th>
            <th class="th-date">{{ item.date }}</th>
            <th class="th-category">{{ item.category }}</th>
            <th class="th-cost">{{ item.value }}</th>
            <th class="th-context"><button class="context-btn"  @click="showContextMenu"><b>. . .</b></button></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: { 
      ContextMenuPaymentForm: ()=>import('../components/ContextMenuPaymentForm.vue')
    },
  name: "PaymentsDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
      return {
        contextMenuShown: false,
        contextMenuSettings: {},
      }
    },
    methods: {
      onShow(settings){
        this.contextMenuSettings = settings
        this.contextMenuShown = true
      },
      onHide(){
        this.contextMenuShown = false
        this.contextMenuSettings = {}
      },
      showContextMenu(){
      this.$contextMenu.show('ContextMenuPaymentForm', {header: "Edit payment Form"})
    }
    },
    mounted(){
      this.$contextMenu.EventBus.$on('show', this.onShow)
      this.$contextMenu.EventBus.$on('hide', this.onHide)
    },
    beforeDestroy(){
      this.$contextMenu.EventBus.$off('show', this.onShow)
      this.$contextMenu.EventBus.$off('hide', this.onHide)
    }
};
</script>

