<template>
  <button @click="emit('onClick', $event)">
    <div>
      <slot name="prependIcon" />
    </div>
   
      <slot />
      
      <slot name="prevIcon" />

   </button>
</template>

<script>
export default {
    name: "Button",
    created(){
        console.log(this.$slots, this.$scopedSlots)
    }
}
</script>