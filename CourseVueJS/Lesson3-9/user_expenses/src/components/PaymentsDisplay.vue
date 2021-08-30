<template>
    <v-container>
        <v-row>
            <v-col cols='1'>#</v-col>
            <v-col cols='4'>Date</v-col>
            <v-col cols='4'>Category</v-col>
            <v-col cols='2'>Cost</v-col>
            <v-col cols='1'>Edit</v-col>
        </v-row>
        <v-row v-for="item in list" :key="item.id">
            <v-col cols='1'>{{item.id}}</v-col>
            <v-col cols="4">{{item.date}}</v-col>
            <v-col cols="4">{{item.category}}</v-col>
            <v-col cols="2">{{item.value}}</v-col>
            <v-col cols="1"><v-btn @click="onContextMenuClick($event,item)">...</v-btn></v-col>
        </v-row>
    </v-container>

</template>


<script>
export default {
  name: "PaymentsDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
      onContextMenuClick(event, item){
            const items = [
                { text: "Редактировать", action:()=>{ console.log('edit', item) }},
                { text: "Удалить", action:()=>{console.log(this.list); return this.list.splice(item.id-1, 1) }}
            ]
            this.$context.show({event,items})
      }
  },
};
</script>

