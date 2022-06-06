<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table table-compact w-full">
      <thead>
        <tr>
          <th></th>
          <th>Nota</th>
          <th>Valor</th>
          <th>Fecha</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <th>{{ item.id }}</th>
          <td>{{ item.note }}</td>
          <td>{{ item.money }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
      <tfoot v-if="items.length > 4">
        <tr>
          <th></th>
          <th>Nota</th>
          <th>Valor</th>
          <th>Fecha</th>
          <th>Total</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
