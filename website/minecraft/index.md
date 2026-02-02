---
title: Hello here
description: You might need to have a Trinity Launcher application installed to follow this link.
search: false
sidebar: true
sitemap:
  exclude: true
head:
  - - meta
    - name: robots
      content: noindex, nofollow
footer: false
---

<script setup>
import { onMounted } from "vue"
import DownloadButtons from "@theme/components/DownloadButtons.vue";

onMounted(() => {
  window.location = `trinitylauncher://Minecraft Bedrock/Minecraft Bedrock${window.location.toString().split("Minecraft Bedrock/").pop()}`
})
</script>

# Hello here

You might need to have a Trinity Launcher application installed to follow this link.

Trinity Launcher is a free and open source Minecraft Bedrock reader for Android platform. It supports a lot of online catalogues on different languages with filters and search, offline reading from local storage, favourites, bookmarks, new chapters notifications and more features.

<DownloadButtons />
