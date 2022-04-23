import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../examples/layout'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/introduce',
    children: [
      {
        path: '/introduce',
        meta: { title: '快速上手' },
        name: 'Introduce',
        component: () => import('@/examples/introduce')
      },
      {
        path: '/about',
        meta: { title: '关于', hide: true },
        name: 'About',
        component: () => import('@/examples/about')
      },
      {
        path: '/icon',
        meta: { title: '图标' },
        name: 'Icon',
        component: () => import('@/examples/icon-example')
      },
      {
        path: '/button',
        name: 'Button',
        meta: { title: '按钮' },
        component: () => import('@/examples/button-example')
      },
      {
        path: '/drag',
        name: 'Drag',
        meta: { title: '拖拽排序' },
        component: () => import('@/examples/drag-list-example')
      },
      {
        path: '/progress',
        name: 'Progress',
        meta: { title: '进度条' },
        component: () => import('@/examples/progress-example')
      },
      {
        path: '/carousel',
        name: 'Carousel',
        meta: { title: '走马灯' },
        component: () => import('@/examples/carousel-example')
      },
      {
        path: '/previewImg',
        name: 'PreviewImg',
        meta: { title: '图片预览' },
        component: () => import('@/examples/previewImg-example')
      },
      {
        path: '/message',
        name: 'Message',
        meta: { title: '消息提示' },
        component: () => import('@/examples/message-example')
      },
      {
        path: '/signBoard',
        name: 'SignBoard',
        meta: { title: '画板' },
        component: () => import('@/examples/signBoard-example')
      },
      {
        path: '/waitting',
        name: 'Waitting',
        meta: { title: '未完待续...' },
        component: () => import('@/examples/watting')
      }
    ]
  }
]
export { routes }
const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL)
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'cqc-vue3-ui'
  next()
})
export default router