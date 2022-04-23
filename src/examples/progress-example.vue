<template>
  <div>
    <DemoBlock
      title="进度条"
      section="基本用法"
      :content="content1"
    >
      <template v-slot:descript>
        <i class="cqc-icon-tishi" style="color: #E6A23C"></i>
        进度条没有设置长度， 默认继承父元素的长度，所以你需要用一个标签把它包起来
        （type为circle,dashboard的圆形进度条不受父元素控制）
      </template>
      <template v-slot:example>
        <div style="width: 350px">
          <cqc-progress :percentage="50" :strokeWidth="20"></cqc-progress>
        </div>
      </template>
    </DemoBlock>
    <DemoBlock
      section="设置颜色, 位置, 线宽, 背景图"
      :content="content2"
    >
      <template v-slot:descript>
        属性分别为 color, textPosition, strokeWidth,  bgColor
      </template>
      <template v-slot:example>
        <div style="width: 350px">
          <cqc-progress :percentage="50" :strokeWidth="20" color="yellow" textPosition="top"></cqc-progress>
          <br>
          <cqc-progress :percentage="60" :strokeWidth="20" color="red" textPosition="center"></cqc-progress>
          <br>
          <cqc-progress :percentage="70" :strokeWidth="14" bgColor="green" textPosition="bottom"></cqc-progress>
        </div>
      </template>
    </DemoBlock>
    <DemoBlock
      section="自定义进度条内容"
      :content="content3"
    >
      <template v-slot:descript>
        通过默认插入v-slot, 来展示自定义内容
      </template>
      <template v-slot:example>
        <div style="width: 350px">
          <cqc-progress :percentage="percentage" :strokeWidth="20">
            <template v-slot>
              <span>你过来呀 {{percentage}}%</span>
            </template>
          </cqc-progress>
        </div>
      </template>
    </DemoBlock>
    <DemoBlock
      section="进度条类型"
      :content="content4"
    >
      <template v-slot:descript>
        通过设置type属性来实现
      </template>
      <template v-slot:example>
        <div style="width: 350px">
          <div style="display:inline-block;">
            <cqc-progress :width="120" type="dashboard" :percentage="70" :strokeWidth="6" color="blue">
              <template v-slot>
                <span>70摄氏</span>
              </template>
            </cqc-progress>
          </div>
          <div style="display:inline-block;margin-left: 50px;">
            <cqc-progress :width="140" type="circle" :percentage="50" :strokeWidth="6" color="red"></cqc-progress>
          </div>
        </div>
      </template>
    </DemoBlock>
    <DemoBlock
      section="动态改变值"
      :content="content5"
    >
      <template v-slot:example>
        <div style="width: 350px; position:relative">
          <cqc-progress :percentage="percentage" :strokeWidth="20"></cqc-progress>
          <cqc-button-group style="position:absolute; right: -100px; top:0">
            <cqc-button type="primary" @click="handleAdd(-10)">-</cqc-button>
            <cqc-button type="primary" @click="handleAdd(10)">+</cqc-button>
          </cqc-button-group>
          <div style="padding-top: 20px"></div>
          <cqc-progress :width="100" type="dashboard" :percentage="percentage" :strokeWidth="6" color="blue"></cqc-progress>
        </div>
      </template>
    </DemoBlock>
    <ArbBlock :data="list"/>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      content1: `
      <div style="width: 350px">
        <cqc-progress :percentage="50" :strokeWidth="20"></cqc-progress>
      </div>

      <script>
        import { CqcProgress } from 'cqc-vue3-ui'
      <\/script>
      `,
      content2: `
      <div style="width: 350px">
        <cqc-progress :percentage="50" :strokeWidth="20" color="yellow" textPosition="top"></cqc-progress>
        <br>
        <cqc-progress :percentage="60" :strokeWidth="20" color="red" textPosition="center"></cqc-progress>
        <br>
        <cqc-progress :percentage="70" :strokeWidth="14" bgColor="green" textPosition="bottom"></cqc-progress>
      </div>
      `,
      content3: `
      <div style="width: 350px">
        <cqc-progress :percentage="percentage" :strokeWidth="20">
          <template v-slot>
            <span>你过来呀 {{percentage}}%</span>
          </template>
        </cqc-progress>
      </div>
      `,
      content4: `
      <cqc-progress :width="120" type="dashboard" :percentage="70" :strokeWidth="6" color="blue">
        <template v-slot>
          <span>{{70}}摄氏度</span>
        </template>
      </cqc-progress>
      <cqc-progress :width="140" type="circle" :percentage="50" :strokeWidth="6" color="red"></cqc-progress>
      `,
      content5: `
      <div style="width: 350px; position:relative">
        <cqc-progress :percentage="percentage" :strokeWidth="20"></cqc-progress>
        <cqc-button-group style="position:absolute; right: -100px; top:0">
          <cqc-button type="primary" @click="handleAdd(-10)">-</cqc-button>
          <cqc-button type="primary" @click="handleAdd(10)">+</cqc-button>
        </cqc-button-group>
        <cqc-progress :width="100" type="dashboard" :percentage="percentage" :strokeWidth="6" color="blue"></cqc-progress>
      </div>

      <script>
      import { reactive, ref, toRefs } from 'vue'
      export default {
        setup() {
          const percentage = ref(60)
          const handleAdd = count => {
            percentage.value += count
          }
          return {
            percentage,
            handleAdd
          }
        }
      }
      `
    })
    const percentage = ref(60)
    const handleAdd = count => {
      percentage.value += count
    }
    const list = ref([]);
    list.value = [
      { prop: 'type', msg: '类型', type: 'string', range: 'line/circle/dashboard', default: 'line' },
      { prop: 'percentage', msg: '百分比', type: 'number', range: '0-100', default: '0' },
      { prop: 'strokeWidth', msg: '线条宽度', type: 'number', range: '-', default: '6' },
      { prop: 'width', msg: '尺寸宽度，用于circle,dashboard', type: 'number', range: '-', default: '50' },
      { prop: 'color', msg: '进度条颜色', type: 'string', range: '-', default: '#409EFF' },
      { prop: 'bgColor', msg: '背景颜色', type: 'string', range: '-', default: '#ebeef5' },
      { prop: 'radius', msg: '是否倒角，只对type=line有效', type: 'boolean', range: 'true/false', default: 'true' },
      { prop: 'showText', msg: '是否展示文本', type: 'boolean', range: 'true/false', default: 'true' },
      { prop: 'textPosition', msg: '文本的位置', type: 'string', range: 'top/center/bottom', default: 'center' },
      { prop: 'strokeLinecap', msg: '线端点形状，只对circle,dashboard有效', type: 'string', range: 'round/butt/square', default: 'round' }
    ]
    return {
      list,
      percentage,
      handleAdd,
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>