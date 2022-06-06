<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Date, String],
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get: () => {
    return props.modelValue
  },
  set: newValue => {
    emit('update:modelValue', newValue)
  },
})
</script>

<template>
  <div class="flex flex-col">
    <label>Selecciona fecha:</label>
    <input
      v-model="localValue"
      type="date"
      class="input input-bordered w-full max-w-xs"
    />
  </div>
</template>
