<template>
  <div class="context" v-if="shown" :style="styles">
      <div v-for="(item, idx) in items" :key="idx" class="context__item" @click="onClick(item)">
          {{ item.text }}
      </div>
  </div>
</template>

<script>
export default {
    name: "ContextMenu",
    data(){
        return {
            shown: false,
            items: [],
            xPos: 0,
            yPos: 0,
        }
    },
    methods: {
        onClick(item){
            item.action()
            this.$context.close()
        },
        onShown({items,caller}){
            this.items = items
            this.shown = true
            this.setPosiotion(caller)
        },
        onClose(){
            this.items = []
            this.shown = false
        },
        setPosiotion(caller) {
            const computedPosition = caller.getBoundingClientRect()
            this.xPos = computedPosition.left
            this.yPos = computedPosition.top 
        }
    },
    computed: {
        styles(){
            return {
                top: `${this.yPos + 30}px`,
                left: `${this.xPos + 20}px`
            }
        }
    },
    mounted() {
        this.$context.EventBus.$on('show', this.onShown)
        this.$context.EventBus.$on('close', this.onClose)
    },
    beforeDestroy(){
        this.$context.EventBus.$off('show', this.onShown)
        this.$context.EventBus.$off('close', this.onClose)
    }
}
</script>

<style lang="scss" scoped>
.context {
    position: absolute;
    background: #eee;
    padding: 10px;
    cursor: pointer;
    &__item{
        padding: 5px 0;
        &:hover{
            color: red;
        }
    }
}
</style>