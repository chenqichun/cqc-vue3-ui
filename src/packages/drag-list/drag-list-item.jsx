import { inject } from 'vue';

export default {
  name: 'CqcDragListItem',
  props: {
    data: {
      type: Object
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const { slot, dragStart, dragEnd, dragOver, drop } = inject('drag-list')
    const data = props.data;
    const index = props.index;

    const drapEvent = {
      onDragstart(e) {
        e.stopPropagation()
        dragStart(e, data)
      },
      onDragover(e) {
        e.preventDefault();
        e.stopPropagation()
        dragOver(e, data)
      },
      ondragend(e) {
        e.stopPropagation()
        dragEnd(e, data)
      },
      onDrop(e) {
        drop(e, data)
      }
    }
    return () => (
      <div class="cqc-drag-list-item" draggable="true" {...drapEvent}>
        { slot && slot({ index, row: data })}
      </div>
    )
  }
}