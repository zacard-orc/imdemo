<template>
  <div>1112 {{ greeting }}</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GreetingMe',

  data() {
    return {
      greeting: 'Vue and TDD',
    }
  },
})
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
