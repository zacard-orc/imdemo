<template>
  <div class="fm" :style="{ 'grid-template-columns': isBlock ? '500px 1fr' : '200px 1fr' }">
    <nav-left uvv="zzz" />
    <div class="board">
      <tool-bar-top />
      <div class="area">
        <router-view />
      </div>
      <tool-bar-bottom />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavLeft from '@/components/NavLeft/NavLeft'
import ToolBarBottom from '@/components/ToolBarBottom/ToolBarBottom'
import ToolBarTop from '@/components/ToolBarTop/ToolBarTop'

export default defineComponent({
  name: 'App',
  components: {
    NavLeft,
    ToolBarTop,
    ToolBarBottom,
  },
  data() {
    return {
      isBlock: false,
    }
  },
  watch: {
    '$route.path': {
      handler: function (zz) {
        this.isBlock = zz.includes('block-')
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {},
})
</script>

<style scoped lang="scss">
@import 'util';
.fm {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-column-gap: 10px;
  height: 100vh;
  box-sizing: border-box;
  > div {
    height: 100%;
  }
  > .board {
    > .area {
      width: 100%;
      height: calc(100vh - 90px);
      margin-bottom: 10px;
      @extend .gm-panel-radius;

      border-radius: 20px;
      > div {
        box-sizing: border-box;
      }
    }
  }
}
</style>
