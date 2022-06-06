<script setup>
import BodyExpendIncomeModal from './BodyExpendIncomeModal.vue'

defineEmits(['close', 'add'])

const addIncomeMoney = value => {
  console.log(value)
}
</script>

<template>
  <BodyExpendIncomeModal
    title="Nuevo ingreso"
    @close="$emit('close')"
    @add="addIncomeMoney"
  />
</template>
