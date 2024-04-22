<script setup>
import { RouterLink, RouterView } from 'vue-router'
import kcHeader from './components/kcHeader.vue'
import kcFooter from './components/kcFooter.vue'
</script>

<template>
  <kcHeader />
  <RouterView />
  <kcFooter />
</template>