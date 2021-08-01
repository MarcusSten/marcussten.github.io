<template>
   <div>
       <div class="display">
       <input type="number" v-model.number="operand1"/>
       <input type="number" v-model.number="operand2"/>
       = {{result}}
     </div>
     <div class="keyboard">
    <button v-on:click="result = operand1 + operand2">+</button>
    <button v-on:click="result = operand1 - operand2">-</button>
    <button @click="division">/</button>
    <button @click="result = operand1 * operand2">*</button>
    <button @click="result = Math.pow(operand1, operand2)">Возвезти в степень</button>
    <button @click="result = Math.floor(operand1 / operand2)">Целочисленное деление</button>
  </div>

   </div> 
</template>
 
<script>
 export default {
   name: 'Calculator',
   data(){
       return {
           operand1: 0,
           operand2: 0,
           result: 0
       }
   },
   methods: {
     division(){
        this.result = this.operand1 / this.operand2
     }
   }
 }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
