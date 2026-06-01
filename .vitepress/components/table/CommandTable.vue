<template>
  <div class="command-table-wrapper">
    <div class="command-table-header">
      <div class="col-header">Command</div>
      <div class="col-header">Aliases</div>
      <div class="col-header desc">Description</div>
    </div>
    <div class="command-table-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.command-table-wrapper {
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 24px;
  background-color: var(--vp-c-bg-soft);
}

.command-table-header {
  display: grid;
  grid-template-columns: 1.5fr 1fr 3fr; 
  gap: 16px;
  background-color: var(--vp-c-bg-mute);
  padding: 14px 20px;
  font-weight: 700;
  border-bottom: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
}

.command-table-body {
  display: flex;
  flex-direction: column;
}

/* Hide table head on mobile */
@media (max-width: 768px) {
  .command-table-header {
    display: none;
  }
}
</style>