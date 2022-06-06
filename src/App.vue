<script setup>
import BaseStat from '@/components/BaseStat.vue'
import SwapTheme from './components/SwapTheme.vue'
import CompactTable from './components/CompactTable.vue'
import TableActionsButtons from '@/components/TableActionsButtons.vue'
</script>

<template>
  <header class="p-6 border-b-2 flex justify-between items-center">
    <h1 class="font-bold uppercase">MoneyTory</h1>
    <SwapTheme />
  </header>
  <main class="m-6">
    <section class="flex justify-between items-center">
      <BaseStat title="Dinero total" value="1000" />
      <div>
        <TableActionsButtons />
      </div>
    </section>
    <section class="mt-10">
      <CompactTable />
    </section>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
