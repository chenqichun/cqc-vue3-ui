import props from './props'
import { computed } from 'vue'
import LoadingIcon from '../loading-icon'
export default {
  name: 'CqcButton',
  props,
  components: {
    LoadingIcon
  },
  setup(props, { slots }) {
    const buttonClass = computed(() => [
      'cqc-button',
      'cqc-button-' + props.type,
      ((props.shadow && typeof props.shadow === 'boolean') && 'cqc-button-shadow')
    ])
    const styles = {}
    const iconStyle = {}
    if (props.shadow && typeof props.shadow === 'string') styles.boxShadow = props.shadow
    if (props.iconColor) iconStyle.color = props.iconColor
    return () => (
      <button class={buttonClass.value} disabled={props.loading || props.disabled} style={styles}>
        {(props.icon && !props.loading && props.position === 'left') && <i style={ iconStyle } class={`icon-${props.position} ${props.icon}`}/>}
        {props.loading && <LoadingIcon />}
        { slots.default && <span>{slots.default()}</span>}
        {(props.icon && !props.loading && props.position === 'right') && <i style={ iconStyle } class={`icon-${props.position} ${props.icon}`}/>}
      </button>
    )
  }
}