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
  typeText: {
    type: String,
    default: 'primary',
    validator: value =>
      ['primary', 'secondary', 'accent', 'error'].includes(value),
  },
})

const formattedValue = computed(() => {
  const euroLocale = Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  })
  return euroLocale.format(props.value)
})
const statTextClass = computed(() => {
  return {
    'stat-value': true,
    [`text-${props.typeText}`]: true,
  }
})
</script>

<template>
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-title">{{ title }}</div>
      <div :class="statTextClass">{{ formattedValue }}</div>
      <div class="stat-desc">{{ desc }}</div>
    </div>
  </div>
</template>
