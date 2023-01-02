<template>
  <div>block demo {{ d1_number }}</div>
</template>

<script setup>
import { ref } from 'vue'
const d1_number = ref(999)
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
