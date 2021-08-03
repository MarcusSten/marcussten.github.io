<template>
  <div>
    <div class="display">
      <input type="number" v-model.number="operand1" placeholder="Operand1">
      <input type="number" v-model.number="operand2" placeholder="Operand2">
      = {{ result }}
    </div>
    <div class="keyboard">
      <button v-on:click="sum">+</button>
      <button v-on:click="sub">-</button>
      <button @click="div">/</button>
      <button @click="mul">*</button>
      <button @click="pow">Возвезти в степень</button>
      <button @click="floor">Целочисленное деление</button>
    </div>
    <br />
    <label class="border"
      ><input class="custom-checkbox" type="checkbox" v-model="showNumbers" />Показать\Скрыть
      цифры</label
    >
    <br />
    <div class="showNumbers" v-if="showNumbers">
      <button v-for="number in numbers" :key="number" @click="inputNumber(number)">{{ number }}</button>
      <button @click="deleteNum">Delete</button>

      <br />
      <label
        ><input type="radio" value="operand1" v-model="operand" />Operand
        1</label
      >
      <label
        ><input type="radio" value="operand2" v-model="operand" />Operand
        2</label
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand: "",
      operand1: '',
      operand2: '',
      result: 0,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      showNumbers: false,
    };
  },
  methods: {
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    div() {
      this.result = this.operand1 / this.operand2;
    },
    mul() {
      this.result = this.operand1 * this.operand2;
    },
    pow() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    floor() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
    deleteNum() {
      this[this.operand]= +String(this[this.operand]).slice(0, -1)
    },
    inputNumber(number){
      this[this.operand] = +(this[this.operand] += String(number))
    }
  },
};
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
.border {
  border: 1px solid black;
  padding: 10px;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.showNumbers{
  margin-top: 20px;
}
</style>
