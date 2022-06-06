<script setup>
import { ref } from 'vue'
import BaseDatepicker from './BaseDatepicker.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['close', 'add'])

const form = ref({})

const addData = () => {
  emit('add', form.value)
}
</script>

<template>
  <div class="modal visible opacity-100 pointer-events-auto">
    <div class="modal-box">
      <h3 class="font-bold text-lg mb-10">{{ title }}</h3>

      <BaseDatepicker v-model="form.expendDate" />

      <div class="form-control mt-8">
        <label class="input-group">
          <input
            v-model="form.money"
            type="text"
            placeholder="0.01"
            class="input input-bordered"
          />
          <span>EUR</span>
        </label>
      </div>

      <div class="form-control mt-8">
        <input
          v-model="form.notes"
          type="text"
          placeholder="Nota..."
          class="input input-bordered w-full max-w-xs"
        />
      </div>

      <div class="modal-action mt-12">
        <button class="btn btn-warning" @click="$emit('close')">
          Cancelar
        </button>
        <button class="btn btn-success" @click="addData">Añadir</button>
      </div>
    </div>
  </div>
</template>
