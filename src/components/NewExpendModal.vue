<script setup>
import BodyExpendIncomeModal from './BodyExpendIncomeModal.vue'

defineEmits(['close', 'add'])

const addExpendMoney = value => {
  console.log(value)
}
</script>

<template>
  <BodyExpendIncomeModal
    title="Nuevo gasto"
    @close="$emit('close')"
    @add="addExpendMoney"
  />
</template>
