export default {
  type: {
    type: String,
    default: 'line',
    validator(val) {
      const types = ['line', 'circle', 'dashboard']
      if (val && !types.includes(val)) {
        throw new Error(`cqc-button的type属性必须为:${types.join(',')}中的一个`)
      }
      return true
    }
  },
  percentage: {
    type: Number,
    default: 0
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  width: {
    type: Number,
    default: 50
  },
  color: {
    type: String,
    default: '#409EFF'
  },
  bgColor: {
    type: String,
    default: '#ebeef5'
  },
  radius: {
    type: Boolean,
    default: true
  },
  showText: {
    type: Boolean,
    default: true
  },
  textPosition: {
    type: String,
    default: 'center'
  },
  strokeLinecap: {
    type: String,
    default: 'round'
  }
}