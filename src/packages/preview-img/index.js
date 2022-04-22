import PreviewComponent from './preview-img.vue'
import '../../theme-chalk/preview-img.scss'
import { createApp } from 'vue'

function PreviewImg(imgArr, opts = {}) {
  const container = document.createElement('div')
  let app = null;
  opts.closeCb = () => {
    app.unmount()
    document.body.removeChild(container)
  }
  app = createApp(PreviewComponent, { imgArr, ...opts })
  app.mount(container)
  document.body.appendChild(container)
}

export default PreviewImg