<template>
  <div class="introduce">
    <h1>介绍</h1>
    <p class="description">cqc-vue3-ui是一个基于vue3开发的pc端ui库</p>
    <p>
      <a target="_blank" href="http://www.chenqichun.com/lib/vue3-mui-docs">cqc-vue3-mui -  vue3的移动端版本</a>
    </p>
    <p>
      <a target="_blank" href="http://www.chenqichun.com/lib/vue2-ui-docs">cqc-vue2-ui -  vue2的pc端版本</a>
    </p>
    <br>
    <br>
    <h1>安装</h1>
    <h3>npm安装</h3>
    <pre v-highlight>
      <code>npm i cqc-vue3-ui -S</code>
    </pre>
    <h3>CDN</h3>
    <p class="description">
      通过 unpkg.com/cqc-vue3-ui 获取到最新版本的资源，
      也可以通过unpkg.com/cqc-vue3-ui@版本号, 获取对应的版本
      然后页面上引入 js 和 css 文件就可以拉。
    </p>
    <pre v-highlight>
      <code>{{cdnCode}}</code>
    </pre>
    <h1>使用</h1>
    <h3>完整引入</h3>
    <p class="description">在 main.js 中写入以下内容：</p>
    <pre v-highlight>
      <code>{{ mainCode }}</code>
    </pre>
    <h3>按需引入</h3>
    <p class="description">cqc-vue3-ui支持按需引入，按需引入能减小项目的体积，你需要先安装babel-plugin-component</p>
    <pre v-highlight>
      <code>npm install babel-plugin-component -D</code>
    </pre>
    <p class="description">
      然后在.babelrc或者babel.config.js里的plugins里添加下面的代码
    </p>
    <pre v-highlight>
      <code>{{ needCode }}</code>
    </pre>
    <h3>然后使用</h3>
    <pre v-highlight>
      <code>{{ useCode }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  setup() {
    const cdnCode = `
    <script src="https://unpkg.com/vue@next"><\/script> <!--必须新引入vue.3x版本-->
    <script src="https://unpkg.com/cqc-vue3-ui"><\/script>
    <link rel="stylesheet" href="https://unpkg.com/cqc-vue3-ui/cqc-vue3-ui.css">

    const app = Vue.createApp({
      template: '<cqc-button type="primary" @click="handleClick">点我</cqc-button>',
      setup() {
        const msg = 'hello, cqc-vue3-ui';
        return {
          handleClick() {
            alert(msg)
          }
        }
      }
    });
    const cqcUI = window['cqc-vue3-ui'].default
    app.use(cqcUI)
    app.mount('#app')
    `
    const mainCode = `
    import { createApp } from 'vue'
    import cqcUI from 'cqc-vue3-ui'
    import 'cqc-vue3-ui/cqc-vue3-ui.css'

    createApp().use(cqcUI)
    `

    const needCode = `
    module.exports = {
      plugins: [
        [
          'component',
          {
            "libraryName": 'cqc-vue3-ui',
            "styleLibrary": {
              "name": "theme-chalk",
              "base": true
            }
          }
        ]
      ]
    }
    `

    const useCode = `
    import { DragList, Button }  from 'cqc-vue3-ui'

    export default {
      install: app => {
        app.use(DragList)
        app.use(Button)
      }
    }
    `
    return {
      cdnCode,
      mainCode,
      needCode,
      useCode
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #3eaf7c;
  text-decoration: none;
  font-weight: 500;
}
.description {
  color: #2c3e50;;
  font-size: 16px;
}
.code {
    line-height: 1.8;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
    color: #000;
    p {
      line-height: 1;
    }
}
</style>