<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  defaultId: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Select item:'
  },
  statusConfig: {
    type: Object,
    default: null
  }
})

const selectedId = ref(props.defaultId)
const selectedItem = computed(() => props.items.find(i => i.id === selectedId.value))

const currentStatus = computed(() => {
  if (!props.statusConfig || !selectedItem.value.statusId) return null;
  return props.statusConfig[selectedItem.value.statusId];
})

const isOpen = ref(false)
const dropdownRef = ref(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectItem = (id) => {
  selectedId.value = id
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="download-widget">
    <div class="select-group">
      <label><strong>{{ label }}</strong></label>

      <div class="custom-select-container" ref="dropdownRef">
        <button class="custom-select-trigger" @click="toggleDropdown" :class="{ 'is-open': isOpen }">
          <span>{{ selectedItem.name }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <transition name="fade-slide">
          <ul v-if="isOpen" class="custom-select-menu">
            <li v-for="item in items" :key="item.id" class="custom-select-option"
              :class="{ 'selected': item.id === selectedId }" @click="selectItem(item.id)">
              <span class="option-name">{{ item.name }}</span>
              <span v-if="statusConfig && item.statusId" class="option-dot"
                :style="{ backgroundColor: statusConfig[item.statusId].color }"></span>
            </li>
          </ul>
        </transition>
      </div>
    </div>

    <div v-if="selectedItem" class="version-details">
      <div v-if="currentStatus" class="status-header">
        <span class="badge" :style="{ backgroundColor: currentStatus.color }">
          {{ currentStatus.label }}
        </span>
      </div>
      <p v-if="currentStatus" class="status-message">{{ currentStatus.message }}</p>

      <div v-else class="spacer"></div>

      <a :href="selectedItem.url" class="download-button"
        :style="currentStatus ? { backgroundColor: currentStatus.color } : {}" target="_blank"
        rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download {{ selectedItem.name }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.download-widget {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 32px 28px;
  margin-top: 24px;
}

.select-group {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  font-size: 1.1rem;
}

.custom-select-container {
  position: relative;
  min-width: 220px;
}

.custom-select-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.custom-select-trigger:hover,
.custom-select-trigger.is-open {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
}

.custom-select-trigger.is-open {
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

.chevron {
  transition: transform 0.3s ease;
  color: var(--vp-c-text-2);
}

.custom-select-trigger.is-open .chevron {
  transform: rotate(180deg);
}

.custom-select-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  max-height: 280px;
  overflow-y: auto;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 8px 0;
  margin: 0;
  list-style: none;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.custom-select-menu::-webkit-scrollbar {
  width: 8px;
}

.custom-select-menu::-webkit-scrollbar-track {
  background: transparent;
}

.custom-select-menu::-webkit-scrollbar-thumb {
  background-color: var(--vp-c-border);
  border-radius: 10px;
  border: 2px solid var(--vp-c-bg-soft);
}

.custom-select-menu::-webkit-scrollbar-thumb:hover {
  background-color: var(--vp-c-text-3);
}

.custom-select-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  cursor: pointer;
  transition: background-color 0.2s, padding-left 0.2s ease;
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
}

.custom-select-option:hover {
  background-color: var(--vp-c-default-soft);
  padding-left: 24px;
}

.custom-select-option.selected {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.option-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.version-details {
  border-top: 1px solid var(--vp-c-border);
  padding-top: 24px;
}

.badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  letter-spacing: 0.8px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  transition: background-color 0.2s;
}

.status-message {
  margin: 18px 0 28px 0;
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
  line-height: 1.5;
  opacity: 0.9;
}

.spacer {
  margin-bottom: 24px;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: white !important;
  background-color: var(--vp-c-brand-1);
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.15rem;
  font-weight: 700;
  transition: filter 0.2s, transform 0.1s, box-shadow 0.2s, background-color 0.2s;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.download-button:hover {
  filter: brightness(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-decoration: none;
}

.download-button:active {
  transform: scale(0.97);
}
</style>