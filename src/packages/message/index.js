import MessageComponent from './message.jsx'
import { createApp } from 'vue'
import '../../theme-chalk/message.scss'

let zIndex = 2000;
let top = 20;

function Message(msg, opts) {
  opts.zIndex = ++zIndex
  const container = document.createElement('div');
  const app = createApp(MessageComponent, { msg, type: opts.type, zIndex, top });
  top += 64
  const instance = app.mount(container)
  document.body.appendChild(container)
  setTimeout(() => {
    instance.destroyFn(() => {
      top -= 64
      app.unmount()
      document.body.removeChild(container)
    })
  }, opts.duration || 3000)
}

['success', 'info', 'warn', 'error'].forEach(type => {
  Message[type] = (msg, opts = {}) => {
    return Message(msg, { type, ...opts })
  };
})

export default Message