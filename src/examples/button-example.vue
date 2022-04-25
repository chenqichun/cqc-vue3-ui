<template>
  <div class="button-demo">
    <DemoBlock
      title="button按钮"
      section="基本用法"
      :content="content1"
    >
    <template v-slot:example>
      <cqc-button type="default">默认</cqc-button>
      <cqc-button type="primary">主要按钮</cqc-button>
      <cqc-button type="danger">危险</cqc-button>
      <cqc-button type="warning">警告</cqc-button>
      <cqc-button type="success">成功</cqc-button>
      <cqc-button type="info">信息</cqc-button>
    </template>
    </DemoBlock>
    <DemoBlock
      section="添加图标"
      :content="content2"
    >
      <template v-slot:example>
        <cqc-button type="primary" :loading="true">主要按钮</cqc-button>
        <cqc-button type="danger" icon="cqc-icon-tishi">危险</cqc-button>
        <cqc-button type="success" icon="cqc-icon-dagou1" position="right">成功</cqc-button>
      </template>
    </DemoBlock>

    <DemoBlock
      section="使用阴影"
      :content="content3"
    >
      <template v-slot:example>
        <cqc-button type="primary" :shadow="true">主要按钮</cqc-button>
        <cqc-button type="danger" shadow="3px 3px 15px red">危险</cqc-button>
      </template>
    </DemoBlock>

    <DemoBlock
      section="按钮组"
      :content="content4"
    >
      <template v-slot:example>
        <cqc-button-group>
          <cqc-button type="primary" icon="cqc-icon-left">上一页</cqc-button>
          <cqc-button type="primary">1</cqc-button>
          <cqc-button type="primary" icon="cqc-icon-right" position="right">下一页</cqc-button>
        </cqc-button-group>
      </template>
    </DemoBlock>
    <ArbBlock :data="list"/>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
export default {
  setup() {
    const state = reactive({
      content1: '',
      content2: '',
      content3: ''
    })
    state.content1 = `
    <cqc-button type="default">默认</cqc-button>
    <cqc-button type="primary">主要按钮</cqc-button>
    <cqc-button type="danger">危险</cqc-button>
    <cqc-button type="warning">警告</cqc-button>
    <cqc-button type="success">成功</cqc-button>
    <cqc-button type="info">信息</cqc-button>

    `
    state.content2 = `
    <cqc-button type="primary" :loading="true">主要按钮</cqc-button>
    <cqc-button type="danger" icon="cqc-icon-tishi">危险</cqc-button>
    <cqc-button type="success" icon="cqc-icon-dagou1" position="right">成功</cqc-button>
    

    `
    state.content3 = `
    <cqc-button type="primary" :shadow="true">主要按钮</cqc-button>
    <cqc-button type="danger" shadow="3px 3px 15px red">危险</cqc-button>

    `
    state.content4 = `
    <cqc-button-group>
      <cqc-button type="primary" icon="cqc-icon-left">上一页</cqc-button>
      <cqc-button type="primary">1</cqc-button>
      <cqc-button type="primary" icon="cqc-icon-right" position="right">下一页</cqc-button>
    </cqc-button-group>

    `
    const list = ref([])
    list.value = [
      { prop: 'type', msg: '类型', type: 'string', range: 'primary/danger/success/warning/info/default', default: 'default' },
      { prop: 'icon', msg: '图标', type: 'string', range: '-', default: '-' },
      { prop: 'loading', msg: 'loading状态', type: 'boolean', range: 'true/false', default: 'false' },
      { prop: 'disabled', msg: '禁止点击', type: 'boolean', range: 'true/false', default: 'false' },
      { prop: 'position', msg: '图标位置', type: 'string', range: 'left/right', default: 'left' },
      { prop: 'shadow', msg: '是否展示阴影,可接收具体的阴影值', type: 'boolean/string', range: 'boolean/string', default: 'false' },
      { prop: 'iconColor', msg: '图标颜色', type: 'string', range: '-', default: '-' }
    ]
    return {
      list,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
.button-demo {
  button {
    margin-right: 10px;
  }
}
</style>