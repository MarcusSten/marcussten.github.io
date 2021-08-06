<template>
  <div class="list">
    <table id="firstTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Category</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in list" :key="idx">
            <th class="th-number">{{ item.id }}</th>
            <th class="th-date">{{ item.date }}</th>
            <th class="th-category">{{ item.category }}</th>
            <th class="th-cost">{{ item.value }}</th>
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
};
</script>
