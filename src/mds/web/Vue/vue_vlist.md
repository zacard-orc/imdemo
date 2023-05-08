# vue3 虚拟列表
```vue
<template>
  <div class="">
    <div class="el-card" :style="{ height: elCardHeight }" @scroll.native="scroll">
      <div class="virtual_box" ref="virtualBox" :style="{ height: virtualContextHeight }"></div>
      <div class="real_content" ref="realContent" :style="{ transform: realContentTransformY }">
        <div>
          <div v-for="item in contentList" :key="item.id">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent, computed, ref, onMounted, reactive, onBeforeMount, watch} from "vue";
export default defineComponent({
  name: 'vList',
  props: {

  },
  setup() {

    const itemNum = ref(0)
    const offsetTop = ref(0)
    const elCardHeight = ref(0)
    const virtualContextHeight = ref(0)
    const start = ref(0)
    const end = ref(0)
    const itemHeight = ref(60)
    const realContentTransformY = ref('translate3d(0)')


    const totalList = reactive([])
    const contentList = ref([])

    const initData = ()=>{
      // 列表父容器的最大高度
      const maxHeight = 600
      // 列表最多展示数量
      itemNum.value = Math.ceil(maxHeight/itemHeight.value) + 1
      // 根据数据量设置列表父容器高度
      elCardHeight.value = totalList.length * itemHeight.value >= maxHeight ? maxHeight + 'px' : totalList.length * itemHeight.value + 'px'
      console.log(totalList.length, elCardHeight.value)
      // 根据数据量设置父容器的滚动高度，控制是否展示滚动条
      virtualContextHeight.value = totalList.length * itemHeight.value + 'px'
      start.value = 0
      end.value = totalList.length > (start.value + itemNum.value) ? (start.value + itemNum.value) : totalList.length
      console.log(end.value)

      contentList.value = totalList.slice(start.value, end.value)
      console.log(contentList)

    }

    // watch(contentList, (n)=>{
    //   console.log(n)
    // })

    const mockTotalList = ( )=>{

      setTimeout(() => {
        for (let i = 0; i < 50000; i++) {
          totalList.push({
            id: i,
            title: `内容${i}`,
          });
        }
        // 初始化数据
        initData()
      })
    }

    const scroll = (e)=>{
      const scrollTop = e.target.scrollTop        // 滚动高度
      const scrollHeight = e.target.scrollHeight  // 容器可滚动总高度
      const clientHeight = e.target.clientHeight  // 可视高度
      // 如果滚动条触底则不继续执行
      if (scrollHeight - scrollTop !== clientHeight) {
        // 根据滚动距离和列表项高度，获取新起点, 60是itemHeight
        const newStart = Math.floor(scrollTop / 60)
        // 优化：如果起点不变，不执行渲染
        if (newStart !== start.value) {

          start.value = newStart
          end.value = totalList.length > (start.value + itemNum.value) ? (start.value + itemNum.value) : totalList.length
          // 重点：设置列表距离顶部高度
          const offsetTop = scrollTop - (scrollTop % 60)
          console.log('offsetTop', offsetTop)

          realContentTransformY.value = `translate3d(0, ${offsetTop}px, 0`
          contentList.value = [...totalList.slice(start.value, end.value)]
          // console.log(contentList)
        }
      }

    }


    onMounted(()=>{
      mockTotalList();
    })


    return {
      scroll,
      elCardHeight,
      virtualContextHeight,
      realContentTransformY,
      contentList
    }
  }
});
</script>
<style lang="scss">

.el-card {

  border: 1px dashed grey;
  padding: 0;
  margin: 20px;
  max-height: 600px;
  position: relative;
  overflow: auto;
  ::v-deep .el-card__body, .el-main {
    padding: 0;
  }
  .virtual_box {
    border: 1px dashed red;

    position: absolute;
    left: 0;
    right: 0;
    height: 1000px;
    z-index: -1;
  }
  .real_content {
    border: 1px dashed blue;
    position: absolute;
    left: 0;
    right: 0;
    transform: translate3d(0,0,0);
    li {
      line-height: 80px;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
    }
  }
}
</style>
```

# vue2 虚拟列表
```vue
<template>
  <div class="">
    <el-card class="elCard" :style="{ height: elCardHeight }" @scroll.native="scroll">
      <div class="virtual_box" ref="virtualBox" :style="{ height: virtualContextHeight }"></div>
      <div class="real_content" ref="realContent" :style="{ transform: realContentTransformY }">
        <ul>
          <li v-for="item in contentList" :key="item.id">{{ item.title }}</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      itemNum: 0,
      offsetTop: 0,
      totalList: [],
      contentList: [],
      elCardHeight: 0,
      virtualContextHeight: 0,
      start: 0,
      end: 0,
      realContentTransformY: 'translate3d(0)',
      itemHeight: 60 // 列表每项高度
    };
  },
  created() {
    this.mockTotalList();

  },
  methods: {
    mockTotalList() {
      setTimeout(() => {
        for (let i = 0; i < 50000; i++) {
          this.totalList.push({
            id: i,
            title: `内容${i}`,
          });
        }
        // 初始化数据
        this.initData()
      })
    },
    initData () {

      // 列表父容器的最大高度
      const maxHeight = 600
      // 列表最多展示数量
      this.itemNum = Math.ceil(maxHeight/this.itemHeight) + 1
      // 根据数据量设置列表父容器高度
      this.elCardHeight = this.totalList.length * this.itemHeight >= maxHeight ? maxHeight + 'px' : this.totalList.length * this.itemHeight + 'px'
      // 根据数据量设置父容器的滚动高度，控制是否展示滚动条
      this.virtualContextHeight = this.totalList.length * this.itemHeight + 'px'
      this.start = 0
      this.end = this.totalList.length > (this.start + this.itemNum) ? (this.start + this.itemNum) : this.totalList.length
      this.contentList = this.totalList.slice(this.start, this.end)
    },
    scroll (e) {
      const scrollTop = e.target.scrollTop        // 滚动高度
      const scrollHeight = e.target.scrollHeight  // 容器可滚动总高度
      const clientHeight = e.target.clientHeight  // 可视高度
      // 如果滚动条触底则不继续执行
      if (scrollHeight - scrollTop !== clientHeight) {
        // 根据滚动距离和列表项高度，获取新起点, 60是itemHeight
        const newStart = Math.floor(scrollTop / 60)
        // 优化：如果起点不变，不执行渲染
        if (newStart !== this.start) {

          this.start = newStart
          this.end = this.totalList.length > (this.start + this.itemNum) ? (this.start + this.itemNum) : this.totalList.length
          // 重点：设置列表距离顶部高度
          const offsetTop = scrollTop - (scrollTop % 60)
          console.log('offsetTop', offsetTop)

          this.realContentTransformY = `translate3d(0, ${offsetTop}px, 0`
          this.contentList = [...this.totalList.slice(this.start, this.end)]
          console.log(this.contentList)
          return
        }
      }
    }
  },
};
</script>


<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
}
.el-card {
  padding: 0;
  margin: 20px;
  max-height: 600px;
  position: relative;
  overflow: auto;
  ::v-deep .el-card__body, .el-main {
    padding: 0;
  }
  .virtual_box {
    position: absolute;
    left: 0;
    right: 0;
    height: 1000px;
    z-index: -1;
  }
  .real_content {
    position: absolute;
    left: 0;
    right: 0;
    transform: translate3d(0);
    li {
      line-height: 80px;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
    }
  }
}
</style>
```
