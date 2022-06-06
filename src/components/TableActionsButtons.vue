<script setup>
defineEmits(['expend', 'income'])
</script>

<template>
  <button
    class="btn btn-circle btn-outline btn-error mr-6"
    @click="$emit('expend')"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-minus"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </button>
  <button
    class="btn btn-circle btn-success btn-outline"
    @click="$emit('income')"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-plus"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </button>
</template>
