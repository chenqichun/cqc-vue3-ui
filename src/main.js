import { createApp } from 'vue'
import App from './App.vue'
import cqcUI from './packages'
import router from './router'
import DemoBlock from '@/examples/common'
import ArbBlock from '@/examples/attribute'
import hl from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

DemoBlock.install = app => {
  app.component('DemoBlock', DemoBlock)
  app.component('ArbBlock', ArbBlock)
}

const app = createApp(App);
app.use(cqcUI).use(DemoBlock).use(router).mount('#app')
app.directive('highlight', el => {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hl.highlightBlock(block)
  })
})