<template>
   <div>
       <input v-model="operand1"/>
       <input v-model="operand2"/>
   </div>
</template>
 
<script>
 export default {
   name: 'Calculator',
   data(){
       return {
           operand1: 0,
           operand2: 0,
       }
   }
 }
</script>
