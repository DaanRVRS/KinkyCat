<script setup>
import { RouterView } from 'vue-router'
import KcFooter from './components/kcFooter.vue'
import KcHeader from './components/kcHeader.vue'
</script>

<template>
  <KcHeader v-if="$route.meta.hideHeader === false" />
  <RouterView/>
  <KcFooter v-if="$route.meta.hideFooter === false" />
</template>