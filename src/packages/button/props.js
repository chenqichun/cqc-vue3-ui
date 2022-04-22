export default {
  type: {
    type: String,
    default: 'default',
    validator(val) {
      const types = [
        'primary',
        'danger',
        'success',
        'warning',
        'info',
        'default'
      ]
      if (val && !types.includes(val)) {
        throw new Error(`cqc-button的type属性必须为:${types.join(',')}中的一个`)
      }
      return true
    }
  },
  icon: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'left'
  },
  shadow: {
    type: [Boolean, String],
    default: false
  },
  iconColor: {
    type: String,
    default: ''
  }
}