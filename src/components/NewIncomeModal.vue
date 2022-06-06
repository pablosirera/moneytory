<script setup>
import useTransactions from '../composables/useTransactions'
import BodyExpendIncomeModal from './BodyExpendIncomeModal.vue'

const props = defineProps({
  totalMoney: {
    type: Number,
    required: true,
  },
})
const emit = defineEmits(['close', 'update'])

const { createTransaction } = useTransactions()

const addIncomeMoney = async value => {
  console.log(value)
  const transactionData = {
    date: value.expendDate,
    money: +value.money,
    total: props.totalMoney + +value.money,
    note: value.notes,
  }
  await createTransaction(transactionData)
  emit('update')
  emit('close')
}
</script>

<template>
  <BodyExpendIncomeModal
    title="Nuevo ingreso"
    @close="$emit('close')"
    @add="addIncomeMoney"
  />
</template>
