<template>
  <div>
    <input v-model="propComp" />
    <button @click="onSave" name="btn">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "TestCompVuex",
  data() {
    return {
      propComp: ""
    };
  },
  methods: {
      ...mapActions([
          'addData'
      ]),
      onSave(){
          const {propComp} = this
          this.addData(propComp)
      }
  }
};
</script>