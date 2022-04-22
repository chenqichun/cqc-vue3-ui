<template>
  <DemoBlock
    title="图片预览"
    section="基本用法"
    :content="content1"
  >
    <template v-slot:example>
      <cqc-button type="primary" @click="handleOpen">打开图片预览</cqc-button>
    </template>
  </DemoBlock>
  <ArbBlock :data="list"/>
</template>

<script>
import { ref } from 'vue'
import PreviewImg from '@/packages/preview-img'
export default {
  setup() {
    const handleOpen = () => {
      PreviewImg([
        'https://img1.baidu.com/it/u=1195663233,4277983440&fm=253&fmt=auto&app=138&f=JPEG?w=776&h=500',
        'https://img2.baidu.com/it/u=3791409505,2767159896&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        'https://img1.baidu.com/it/u=2026911532,1711476140&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        'https://img1.baidu.com/it/u=3403402246,3586529100&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
      ], { index: 0 })
    }
    const content1 = ref('')
    content1.value = `
    <cqc-button @click="handleOpen">打开图片预览</cqc-button>

    <script>
      import { ref } from 'vue'
      import { PreviewImg } from 'cqc-vue3-ui'
      export default {
        setup() {
          const handleOpen = () => {
            PreviewImg([
              'https://img1.baidu.com/it/u=1195663233,4277983440&fm=253&fmt=auto&app=138&f=JPEG?w=776&h=500',
              'https://img2.baidu.com/it/u=3791409505,2767159896&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
              'https://img1.baidu.com/it/u=2026911532,1711476140&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
              'https://img1.baidu.com/it/u=3403402246,3586529100&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
            ], { index: 0 })
          }

          return {
            handleOpen
          }
        }
      }
    <\/script>
    `;
    const list = ref([]);
    list.value = [
      { prop: 'imgArr', msg: '图片数组', type: 'array', range: '-', default: '-' },
      { prop: 'index', msg: '从那张开始，索引', type: 'number', range: '-', default: '0' },
      { prop: 'width', msg: '图片的宽', type: 'number', range: '-', default: '600' },
      { prop: 'height', msg: '图片的高', type: 'number', range: '-', default: '400' },
      { prop: 'modelClose', msg: '点击遮罩层关闭', type: 'boolean', range: 'true/false', default: 'true' },
      { prop: 'closeCb', msg: '关闭回调', type: 'function', range: '-', default: '-' }
    ]
    return {
      list,
      content1,
      handleOpen
    }
  }
}
</script>