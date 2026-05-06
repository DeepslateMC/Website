---
title: Downloads
prev: false
next: false
---

# DeepslateMC Downloads

Select the desired version from the dropdown menu to download the server files.

<script setup>
import BaseDownloadWidget from './components/BaseDownloadWidget.vue'

const baseUrl = 'https://pascalpex.de/'

const versions = [
  // Preview
  { id: '26.1.2', name: '26.1.2', statusId: 'preview' },
  // Stable
  { id: '1.21.11', name: '1.21.11', statusId: 'stable' },
  // EOL
  { id: '1.21.10', name: '1.21.10', statusId: 'eol' },
  { id: '1.21.8', name: '1.21.8', statusId: 'eol' },
  { id: '1.21.7', name: '1.21.7', statusId: 'eol' },
  { id: '1.21.6', name: '1.21.6', statusId: 'eol' },
  { id: '1.21.5', name: '1.21.5', statusId: 'eol' },
  { id: '1.21.4', name: '1.21.4', statusId: 'eol' },
  { id: '1.21.3', name: '1.21.3', statusId: 'eol' },
  { id: '1.21.1', name: '1.21.1', statusId: 'eol' },
  { id: '1.21', name: '1.21', statusId: 'eol' },
  { id: '1.20.6', name: '1.20.6', statusId: 'eol' },
  { id: '1.20.4', name: '1.20.4', statusId: 'eol' },
  { id: '1.20.2', name: '1.20.2', statusId: 'eol' },
  { id: '1.20.1', name: '1.20.1', statusId: 'eol' },
  { id: '1.19.4', name: '1.19.4', statusId: 'eol' },
  { id: '1.19.3', name: '1.19.3', statusId: 'eol' },
  { id: '1.19.2', name: '1.19.2', statusId: 'eol' },
  { id: '1.19.1', name: '1.19.1', statusId: 'eol' },
  { id: '1.19', name: '1.19', statusId: 'eol' },
  { id: '1.18.2', name: '1.18.2', statusId: 'eol' },
  { id: '1.18.1', name: '1.18.1', statusId: 'eol' },
  { id: '1.17.1', name: '1.17.1', statusId: 'eol' }
].map(version => ({
  ...version,
  url: `${baseUrl}files/deepslate/${version.id}/DeepslateMC.jar`
}))

const downloadConfig = {
  preview: { 
    label: 'Preview', 
    message: 'Preview of the next Minecraft update. Caution: May still contain bugs!', 
    color: '#970bf5' 
  },
  stable: { 
    label: 'Stable', 
    message: 'The latest stable release. Recommended for all servers.', 
    color: '#10b981' 
  },
  eol: { 
    label: 'EOL', 
    message: 'End of Life. This version no longer receives updates or bug fixes.', 
    color: '#ef4444' 
  }
}
</script>

<BaseDownloadWidget 
  :items="versions" 
  default-id="1.21.11"
  label="Select version:"
  :status-config="downloadConfig"
/>