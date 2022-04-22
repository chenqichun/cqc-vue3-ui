import { provide, watch, reactive, ref } from 'vue'
import Item from './drag-list-item.jsx'

export default {
  name: 'CqcDragList',
  components: {
    Item
  },
  emits: ['change'],
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { slots, emit }) {
    const state = reactive({
      data: [],
      dropPosition: '', // 拖拽的位置， 1表示放在前面， 2表示放在后面
      dragNode: null, // 拖动的这个元素的数据
      dragData: null, // 拖动的数据
      dropData: null, // 拖动了哪个个元素上，这个元素的数据
      showInditcator: {
        display: 'none',
        top: 9999 + 'px',
        left: 0
      }
    })
    const makeKey = data => {
      data._dargKey = 0;
      data.forEach((e, i) => (e._dargKey = i + 1))
      return JSON.parse(JSON.stringify(data))
    }
    const instanceNode = ref(null)

    const dragStart = (e, data) => {
      state.dragNode = e.target;
      state.dragData = data;
    }
    const dragOver = (e, data) => {
      if (state.dragData._dargKey === data._dargKey) {
        // 不能拖到自己身上
        return false
      }
      const { top, bottom, height } = e.target.getBoundingClientRect()
      const instanceTop = instanceNode.value.getBoundingClientRect().top;
      const clientY = e.clientY
      if ((clientY - top > height / 2) && (clientY - top < height)) {
        state.dropPosition = 2
        state.showInditcator.top = bottom - instanceTop + 'px'
        state.showInditcator.display = 'block'
      } else if (clientY - top > 0 && clientY - top < height / 2) {
        state.dropPosition = 1
        state.showInditcator.top = top - instanceTop + 'px'
        state.showInditcator.display = 'block'
      } else {
        state.dropPosition = ''
        state.showInditcator.display = 'none'
      }
    }
    const drop = (_, data) => {
      state.dropData = data;
    }
    const clearData = () => {
      state.dropPosition = '';
      state.dragNode = null;
      state.dragData = null;
      state.dropData = null;
      state.showInditcator = {
        display: 'none',
        top: 9999 + 'px',
        left: 0
      }
    }
    const dragEnd = () => {
      if (state.dropPosition && state.dropData) {
        state.data = JSON.parse(JSON.stringify(state.data.filter(e => e._dargKey !== state.dragData._dargKey)))
        const index = state.data.findIndex(e => e._dargKey === state.dropData._dargKey)
        if (state.dropPosition === 1) {
          state.data.splice(index, 0, state.dragData)
        } else if (state.dropPosition === 2) {
          state.data.splice(index + 1, 0, state.dragData)
        }
      }
      clearData()
      emit('change', state.data)
    }
    provide('drag-list', {
      slot: slots.default,
      dragStart,
      dragOver,
      dragEnd,
      drop
    })

    watch(props.data, val => {
      state.data = makeKey(val)
    }, { immediate: true })
    const renderChild = data => {
      if (!data || data.length === 0) {
        return <div>暂无数据</div>
      }
      return data.map((item, i) => <Item index={i} data={item} key={item._dargKey} />)
    }
    return () => (
      <div class="cqc-drag-list" ref={instanceNode}>
        {renderChild(state.data)}
        <div class="cqc-drap-inditcator" style={state.showInditcator} ></div>
      </div>
    )
  }
}