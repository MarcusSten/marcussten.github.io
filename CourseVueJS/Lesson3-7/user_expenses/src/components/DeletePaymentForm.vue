<template>
    <div>
        <button @click="deletePaymentForm">Delete</button>
    </div>
</template>

<script>
export default {
  name: "DeletePaymentForm",
  data(){
    return {
    }
  },
  methods: {
      deletePaymentForm() {
        console.log('hello')
        this.$contextMenu.hide()
        }
  }
}
</script>