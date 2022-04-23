import { computed, nextTick, onMounted, reactive, toRefs, watch, ref } from 'vue'
import getComputed from './compute'
import props from './props'
export default {
  name: 'CqcProgress',
  props,
  setup(props, { slots }) {
    const instanceRef = ref(null)
    const { percentage } = toRefs(props)

    let _width = 0;
    const styles = reactive({
      height: props.strokeWidth + 'px',
      backgroundColor: props.bgColor,
      borderRadius: props.radius ? props.strokeWidth + 'px' : 0
    })
    const barStyles = reactive({
      backgroundColor: props.color,
      borderRadius: props.radius ? props.strokeWidth + 'px' : 0
    })
    const textClass = computed(() => {
      return [
        'cqc-progress-text',
        'cqc-progress-text-' + props.textPosition
      ]
    })
    const changeWidth = percentage => {
      if (percentage > 100) percentage = 100;
      if (percentage < 0) percentage = 0;
      barStyles.width = parseInt(percentage / 100 * _width) + 'px'
    }
    const {
      trackPath,
      trailPathStyle,
      circlePathStyle,
      relativeStrokeWidth
    } = getComputed(props)
    watch(percentage, val => changeWidth(val))
    onMounted(() => {
      nextTick(() => {
        if (instanceRef.value) {
          _width = instanceRef.value.clientWidth;
          changeWidth(percentage.value)
        }
      })
    })
    return () => {
      if (props.type === 'line') {
        return (<div class="cqc-progress" style={styles} ref={instanceRef}>
          <div class="cqc-progress-bar" style={barStyles}>
            {props.showText && (<div class={textClass.value}>
              {slots.default ? slots.default() : props.percentage + '%'}
            </div>)}
          </div>
        </div>)
      } else {
        return (<div class="cqc-progress" style={{ height: props.width + 'px', width: props.width + 'px' }}>
          <svg width='100%' height='100%' viewBox="0 0 100 100">
            <path
              d={trackPath.value}
              stroke={props.bgColor}
              stroke-width={props.strokeWidth}
              fill="none"
              style={trailPathStyle.value}>
            </path>
            <path
              d={trackPath.value}
              stroke={props.color}
              fill="none"
              stroke-linecap={props.strokeLinecap}
              stroke-width={props.percentage ? relativeStrokeWidth.value : 0}
              style={circlePathStyle.value}>
            </path>
          </svg>
          {props.showText && (<div class="cqc-track-text">
            {slots.default ? slots.default() : props.percentage + '%'}
          </div>)}
        </div>)
      }
    }
  }
}