<template>
  <DemoBlock
    title="走马灯"
    section="基本用法"
    :content="content1"
  >
    <template v-slot:example>
      <div style="width: 400px">
        <cqc-carousel
          height="300px"
          autoplay
          :delay="3000"
          :initIndex="0"
          :duration="500"
          @change="handeChange"
        >
          <cqc-carousel-item  v-for="(item, index) in count" :key="item">
            <div style="width:100%;height:100%" :style="{background: item}">面板{{index+1}}</div>
          </cqc-carousel-item>
        </cqc-carousel>
      </div>
    </template>
  </DemoBlock>
  <ArbBlock :data="list"/>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    count.value = ['blue', 'red', 'yellow']

    const handeChange = e => {
      // console.log(e)
    }
    const content1 = ref('')
    content1.value = `
    <div style="width: 400px">
      <cqc-carousel
        height="300px"
        autoplay
        :delay="3000"
        :initIndex="0"
        :duration="500"
        @change="handeChange"
      >
        <cqc-carousel-item  v-for="(item, index) in count" :key="item">
          <div style="width:100%;height:100%" :style="{background: item}">面板{{index+1}}</div>
        </cqc-carousel-item>
      </cqc-carousel>
    </div>

    <script>
    import { ref } from 'vue'
    export default {
      setup() {
        const count = ref(0)
        count.value = ['blue', 'red', 'yellow']
        const handeChange = e => {
          // console.log(e)
        }

        return {
          count,
          handeChange
        }
      }
    }
    `
    const list = ref([]);
    list.value = [
      { prop: 'height', msg: '高度', type: 'string', range: '-', default: '200px' },
      { prop: 'autoplay', msg: '自动播放', type: 'boolean', range: 'true/false', default: 'true' },
      { prop: 'delay', msg: '动画延迟时间', type: 'number', range: '-', default: '3000' },
      { prop: 'duration', msg: '动画过渡时间', type: 'number', range: '-', default: '500' },
      { prop: 'loop', msg: '是否衔接', type: 'boolean', range: 'true/false', default: 'true' },
      { prop: 'initIndex', msg: '从哪个位置开始,索引值', type: 'number', range: '-', default: '0' },
      { prop: 'reverse', msg: '是否倒着放', type: 'boolean', range: 'true/false', default: 'false' },
      { prop: 'timeFn', msg: 'css动画类型', type: 'string', range: '-', default: 'ease' },
      { prop: 'showBtn', msg: '是否显示左右按钮', type: 'boolean', range: 'true/false', default: 'true' },
      { prop: 'showDots', msg: '是否显示指示点', type: 'boolean', range: 'true/false', default: 'true' }
    ]
    return {
      count,
      handeChange,
      content1,
      list
    }
  }
}
</script>

<style>

</style>