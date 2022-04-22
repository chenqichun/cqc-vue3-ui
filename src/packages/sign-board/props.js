export default {
  width: {
    type: Number,
    default: 600
  },
  height: {
    type: Number,
    default: 400
  },
  lineWidth: {
    type: Number,
    default: 2
  },
  strokeStyle: {
    type: String,
    default: '#000'
  },
  lineCap: {
    type: String,
    default: 'round' // butt，round，square
  },
  lineDash: {
    type: Array,
    default: () => [0, 0] // 实线长度, 虚线长度
  },
  doubleLine: {
    type: Boolean,
    default: false
  },
  previewBtn: {
    type: Boolean,
    default: true
  },
  miniType: {
    type: String,
    default: 'image/png'
  },
  canvasBg: {
    type: [String, Boolean],
    default: false
  }
}