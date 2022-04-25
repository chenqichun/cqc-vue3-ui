<template>
    <DemoBlock
      title="拖拽列表"
      section="基本用法"
      :content="content1"
    >
      <template v-slot:descript>
        拖拽列表需要的数据是对象数组，如[{...}, {...}], 不能是基本类型数组,如[1,2,3,4]
        <div>
          如果数据不满足要求，请把数据构建成对象数组
        </div>
        <div>
          每一条数据，都通过作用域插槽返回，对应 row
        </div>
      </template>
      <template v-slot:example>
        <div style="margin-bottom: 10px; color: #E6A23C">拖动它们进行排序</div>
        <cqc-drag-list :data="data" @change="handleChange">
          <template v-slot="{ row }">
            <div
            :style="{
              padding:'6px',
              border:'1px solid #ddd',
              marginBottom:'10px',
              cursor: 'move'
            }">
              {{row.name}}
            </div>
          </template>
        </cqc-drag-list>
      </template>
    </DemoBlock>
    <ArbBlock :data="list"/>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
export default {
  setup() {
    const state = reactive({
      data: [
        { name: '张三', age: 18, bg: 'red' },
        { name: '李四', age: 30, bg: 'blue' },
        { name: '王五', age: 45, bg: 'rgba(0,0,0,0.8)' },
        { name: '老六', age: 13, bg: 'green' }
      ],
      content1: `
      <cqc-drag-list :data="data" @change="handleChange">
        <template v-slot="{ row }">
          <div
          :style="{
            padding:'6px',
            border:'1px solid #ddd',
            marginBottom:'10px',
            color: '#fff',
            background: row.bg
          }">
            {{row.name}}
          </div>
        </template>
      </cqc-drag-list>

      <script>
        import { reactive, toRefs } from 'vue'
        setup() {
          const state = reactive({
            data: [
              { name: '张三', age: 18 },
              { name: '李四', age: 30 },
              { name: '王五', age: 45 },
              { name: '老六', age: 13 }
            ]
          })
          const handleChange = data => {
            console.log(data)
          }
          return {
            ...toRefs(state),
            handleChange
          }
        }
      <\/script>
      `
    })
    const handleChange = data => {
      console.log(data)
    }
    const list = ref([]);
    list.value = [
      { prop: 'data', msg: '数组数据', type: 'array', range: '-', default: '-' }
    ]
    return {
      list,
      ...toRefs(state),
      handleChange
    }
  }
}
</script>