export default {
  imgArr: {
    type: Array,
    default: () => []
  },
  index: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 600
  },
  height: {
    type: Number,
    default: 400
  },
  modelClose: {
    type: Boolean,
    default: true
  },
  closeCb: Function
}