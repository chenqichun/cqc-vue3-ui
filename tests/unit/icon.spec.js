import { expect } from 'chai'
import Icon from '@/packages/icon/icon'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
describe('icon.jsx', () => {
  it('判断icon.jsx的属性值icon能否渲染到标签上', () => {
    const container = document.createElement('div');
    const app = createApp({
      template: '<cqc-icon></cqc-icon>',
      components: {
        'cqc-icon': Icon
      }
    },{
      icon: 'left'
    }).mount(container)
    document.body.appendChild(container)
    let xlink = app.$el.querySelector('use').getAttribute('xlink:href');
    expect(xlink).to.eq('#icon-left')
  })
})