<template>
  <div id="app">
    <div class="page-links">
      <router-link to='/dashboard'>Dashboard</router-link> /
      <router-link to='/about'>About</router-link> / 
      <button @click="goToPage(404)">404</button> /
    </div>
    <div class="content">
    <router-view />
    </div>
    <transition name="fade">
      <modal-window-add-payment-form v-if="modalShown" :modalSettings="modalSettings"/>
    </transition>
  </div>
</template>

<script>

  export default {
    components: { 
      ModalWindowAddPaymentForm: ()=>import('./components/ModalWindowAddPaymentForm.vue'),
    },
    name: 'App',
    data() {
      return {
        modalShown: false,
        modalSettings: {},
      }
    },
    methods: {
      goToPage(pageName){
        this.$router.push({
          name: pageName
        })
      },
      onShow(settings){
      this.modalSettings = settings
      this.modalShown = true
      },
      onHide(){
        this.modalShown = false
        this.modalSettings = {}
        this.contextMenuShown = false
        this.contextMenuSettings = {}
      }
    },
    mounted(){
      this.$modal.EventBus.$on('show', this.onShow)
      this.$modal.EventBus.$on('hide', this.onHide)
    },
    beforeDestroy(){
      this.$modal.EventBus.$off('show', this.onShow)
      this.$modal.EventBus.$off('hide', this.onHide)
    }
  }
</script>

<style lang="scss">
#app {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  size: 25px;
}
</style>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
