export default {
    install(Vue) {
      if (this.installed) {
        return;
      }
  
      this.installed = true;
  
  
      Vue.prototype.$modal = {
        
        EventBus: new Vue(),
  
        show(name, setting) {
            this.EventBus.$emit('show', {name, ...setting})
        },
  
        hide() {
            this.EventBus.$emit('hide')
        },
      };
    },
  };