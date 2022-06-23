<script setup>
import BaseStat from '@/components/BaseStat.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import CompactTable from '@/components/CompactTable.vue'
import TableActionsButtons from '@/components/TableActionsButtons.vue'
import NewExpendModal from '@/components/NewExpendModal.vue'
import NewIncomeModal from '@/components/NewIncomeModal.vue'
import { computed, ref } from 'vue'
import useTransactions from '@/composables/useTransactions'

const { listTransactions } = useTransactions()

const totalMoney = ref(null)
const idealMoney = ref(1000)
const transactions = ref([])
const shouldShowExpendModal = ref(false)
const shouldShowIncomeModal = ref(false)

const typeTextTotalMoney = computed(() => {
  return totalMoney.value >= idealMoney.value ? 'accent' : 'error'
})
const loadTransactions = async () => {
  transactions.value = await listTransactions()
  totalMoney.value = transactions.value[0].total
}
const showExpendModal = () => {
  shouldShowExpendModal.value = true
}
const closeExpendModal = () => {
  shouldShowExpendModal.value = false
}
const showIncomeModal = () => {
  shouldShowIncomeModal.value = true
}
const closeIncomeModal = () => {
  shouldShowIncomeModal.value = false
}

loadTransactions()
</script>

<template>
  <BaseHeader />
  <main class="m-6">
    <section class="flex justify-between items-center">
      <div>
        <BaseStat
          v-if="totalMoney"
          :value="totalMoney"
          title="Dinero total"
          class="mr-4"
          :type-text="typeTextTotalMoney"
        />
        <BaseStat
          title="Dinero ideal"
          :value="idealMoney"
          type-text="secondary"
        />
      </div>
      <div>
        <TableActionsButtons
          @expend="showExpendModal"
          @income="showIncomeModal"
        />
      </div>
    </section>
    <section class="mt-10">
      <CompactTable :items="transactions" />
    </section>

    <NewExpendModal
      v-if="shouldShowExpendModal"
      :total-money="totalMoney"
      @close="closeExpendModal"
      @update="loadTransactions"
    />
    <NewIncomeModal
      v-if="shouldShowIncomeModal"
      :total-money="totalMoney"
      @close="closeIncomeModal"
      @update="loadTransactions"
    />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
