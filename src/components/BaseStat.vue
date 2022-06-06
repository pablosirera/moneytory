<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  value: {
    type: [Number, String],
    default: 0,
  },
  desc: {
    type: String,
    default: '',
  },
})

const formattedValue = computed(() => {
  const euroLocale = Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  })
  return euroLocale.format(props.value)
})
</script>

<template>
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-title">{{ title }}</div>
      <div class="stat-value text-primary">{{ formattedValue }}</div>
      <div class="stat-desc">{{ desc }}</div>
    </div>
  </div>
</template>
