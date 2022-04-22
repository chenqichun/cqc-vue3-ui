<template>
  <div class="message-demo">
    <DemoBlock
      title="消息提示"
      section="基本用法"
      :content="content1"
    >
      <template v-slot:descript>
        <p>
          Message(msg, opts):  msg是内容， opts是配置
        </p>
        <h4> 两种写法:</h4>
        <p>Message.success(msg)</p>
        <p>Message(msg, { type: 'success' })</p>
      </template>
      <template v-slot:example>
        <cqc-button @click="handleClick">点击弹出消息</cqc-button>
        <cqc-button @click="handleSuccess">成功</cqc-button>
        <cqc-button @click="handleError">错误</cqc-button>
        <cqc-button @click="handleWarn">警告</cqc-button>
        <cqc-button @click="handleInfo">信息</cqc-button>
      </template>
    </DemoBlock>
    <ArbBlock :data="list"/>
  </div>
</template>

<script>
import Message from '@/packages/message'
import { ref } from 'vue'
export default {
  setup() {
    const content1 = ref('')
    content1.value = `
    <cqc-button @click="handleClick">点击弹出消息</cqc-button>
    <cqc-button @click="handleSuccess">成功</cqc-button>
    <cqc-button @click="handleError">错误</cqc-button>
    <cqc-button @click="handleWarn">警告</cqc-button>
    <cqc-button @click="handleInfo">信息</cqc-button>

    <script>
      import { Message } from 'cqc-vue3-ui'
      export default {
        setup() {
          const methods = {
            handleClick() {
              Message('哈哈哈', { type: 'success' })
            },
            handleSuccess() {
              Message.success('成功消息')
            },
            handleError() {
              Message.error('错误消息')
            },
            handleWarn() {
              Message.warn('警告消息')
            },
            handleInfo() {
              Message.info('普通消息', { duration: 6000 })
            }
          }
          return {
            ...methods
          }
        }
      }
    <\/script>
    `
    const methods = {
      handleClick() {
        Message('哈哈哈', { type: 'success' })
      },
      handleSuccess() {
        Message.success('成功消息')
      },
      handleError() {
        Message.error('错误消息')
      },
      handleWarn() {
        Message.warn('警告消息')
      },
      handleInfo() {
        Message.info('普通消息', { duration: 6000 })
      }
    }
    const list = ref([]);
    list.value = [
      { prop: 'type', msg: '类型', type: 'string', range: 'success/error/warn/info', default: 'info' },
      { prop: 'msg', msg: '内容', type: 'string', range: '-', default: '' }
    ]
    return {
      list,
      content1,
      ...methods
    }
  }
}
</script>

<style>
.message-demo .cqc-button {
  margin-right: 20px;
}
</style>