<script setup>
import { RouterLink, RouterView } from 'vue-router'
import kcHeader from './components/kcHeader.vue'
</script>

<template>
  <kcHeader/>
  <RouterView/>
  <kcFooter />
</template>