<template>
  <div class="list">
    <table id="firstTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Category</th>
          <th>Cost</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in list" :key="idx">
            <th class="th-number">{{ item.id }}</th>
            <th class="th-date">{{ item.date }}</th>
            <th class="th-category">{{ item.category }}</th>
            <th class="th-cost">{{ item.value }}</th>
            <th><span @click="onContextMenuClick($event,item)">...</span></th>
        </tr>
      </tbody>
    </table>
  </div>
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

