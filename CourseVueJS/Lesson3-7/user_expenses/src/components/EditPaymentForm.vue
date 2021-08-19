<template>
    <div>
        <button @click="editPaymentForm">Edit</button>
    </div>
</template>

<script>
export default {
  name: "EditPaymentForm",
  data(){
    return {
    }
  },
  methods: {
      editPaymentForm() {
        console.log('hello')
        }
  }
}
</script>