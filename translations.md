---
title: Translations
prev: false
next: false
---

# DeepslateMC Translations

Here you can download translated messages for your `messages.yml` file found inside the `deepslate` folder. You can learn more about the messages file [here](/docs/files/messages)

<script setup>
import BaseDownloadWidget from './.vitepress/components/BaseDownloadWidget.vue'

const baseUrl = 'https://deepslatemc.de/'

const languages = [
  { id: 'english', name: 'English (Default)' },
  { id: 'german', name: 'German (Deutsch)' },
  { id: 'chinese', name: 'Chinese (简体中文)' },
  { id: 'turkish', name: 'Turkish (Türkçe)' }
].map(lang => ({
  ...lang,
  url: `${baseUrl}files/translations/${lang.id}/messages.yml`
}))
</script>

<BaseDownloadWidget 
  :items="languages" 
  default-id="english"
  label="Select language:"
/>