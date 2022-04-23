<template>
  <div class="demo-block">
    <h2 v-if="title">{{ title }}</h2>
    <h3>{{section}}</h3>
    <p>
      <slot name="descript"></slot>
    </p>
    <div class="source">
      <div class="example">
        <slot name="example" />
      </div>
      <pre v-highlight :style="{height: show ? codeHeight + 'px' : '0' }" >
        <code ref="code">
          {{content}}
        </code>
        <span class="copy" @click="handleCopy">复制</span>
      </pre>
      <div class="bottom" @click="handleShow">
        <i :class="[show? 'cqc-icon-arrow-up' : 'cqc-icon-xiasanjiao', 'cqc-icon']"></i>{{show ? '收起代码' : '展开代码' }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Message from '@/packages/message'
export default {
  name: 'demo-block',
  props: {
    title: String,
    section: String,
    content: String
  },
  setup(props) {
    const show = ref(false)
    const code = ref(null)
    const codeHeight = ref(0)
    const handleShow = () => {
      show.value = !show.value
    }
    function escape(str) {
      str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;')
      str = str.replace(/>/g, '&gt;')
      // str = str.replace(/"/g, '&quto;')
      // str = str.replace(/\'/g, '&#39;')
      str = str.replace(/`/g, '&#96;')
      str = str.replace(/\//g, '&#x2F;')
      return str
    }
    const handleCopy = () => {
      const textarea = document.createElement('textarea')
      textarea.style.width = textarea.style.height = 0;
      textarea.style.overflow = 'hidden'
      textarea.style.opacity = 0;
      textarea.value = props.content
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      Message.success('复制成功！')
    }
    onMounted(() => {
      setTimeout(() => {
        codeHeight.value = code.value.clientHeight
      }, 50);
    })
    return {
      escape,
      handleCopy,
      show,
      code,
      handleShow,
      codeHeight
    }
  }
}
</script>

<style lang="scss">
.demo-block {
  position: relative;
  max-width: 860px;
  .example {
    padding: 24px;
  }
  .copy {
    position: absolute;
    right: 10px;
    top: 18px;
    color: #f8f8f8;
    padding: 4px;
    background: rgba(0,0,0,0.2);
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      color: #3eaf7c;
    }
  }
  pre {
    position: relative;
    transition: all 0.3s ease;
    height: 0;
    overflow: hidden;
    &.show {
      height: auto;
    }
  }
  pre code {
    background-color: #f8f8f8;
    padding: 2em 1em !important;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    font-size: 28px;
    color: #1f2f3d;
  }
  h3 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .source {
    padding-bottom: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    margin-top: 10px;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    border-top: 1px solid #ebebeb;
    padding-top: 16px;
    align-items: center;
    cursor: pointer;
    .cqc-icon {
      transition: all 0.1s linear;
      margin-right: 2px;
    }
    &:hover {
      color: #3eaf7c;
      .cqc-icon {
        fill: #3eaf7c;
        margin-right: 6px
      }
    }
  }
}
</style>