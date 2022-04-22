import { computed, onMounted, reactive } from 'vue'
import Icon from '@/packages/icon'

export default {
  name: 'CqcMessage',
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'info'
    },
    msg: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 2000
    },
    top: {
      type: Number,
      default: 20
    }
  },
  setup(props, { expose }) {
    const style = reactive({
      zIndex: props.zIndex,
      top: props.top + 'px',
      transform: 'translateY(-100%)'
    })
    const classes = [
      'cqc-message',
      'cqc-message-' + props.type
    ]
    const icon = computed(() => {
      let type = '';
      switch (props.type) {
          case 'success':
            type = 'xuanzhongdizhi'
            break;
          case 'error':
            type = 'guanbi2'
            break;
          case 'warn':
            type = 'tishi'
            break;
          case 'info':
            type = 'tishi'
            break;
      }
      return type
    })
    expose({
      destroyFn: cb => {
        style.transform = 'translateY(-100%)'
        setTimeout(() => {
          cb && cb()
        }, 300);
      }
    })
    onMounted(() => {
      setTimeout(() => {
        style.transform = 'translateY(0)'
      }, 20);
    })
    return () => (
      <div class={classes} style={style}>
        <Icon icon={icon.value} class="cqc-message-icon" />
        {props.msg}
      </div>
    )
  }
}