<script setup>
defineProps({
  columns: {
    type: Array,
    required: true
  },
  grid: {
    type: String,
    default: '1fr 1fr'
  }
})
</script>

<template>
  <div class="base-table-wrapper">
    <div class="base-table-header" :style="{ gridTemplateColumns: grid }">
      <div v-for="col in columns" :key="col" class="col-header">{{ col }}</div>
    </div>
    <div class="base-table-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.base-table-wrapper {
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 24px;
  background-color: var(--vp-c-bg-soft);
}

.base-table-header {
  display: grid;
  gap: 16px;
  background-color: var(--vp-c-bg-mute);
  padding: 14px 20px;
  font-weight: 700;
  border-bottom: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
}

@media (max-width: 768px) {
  .base-table-header {
    display: none;
  }
}
</style>