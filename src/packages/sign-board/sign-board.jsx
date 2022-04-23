import { ref } from 'vue'
import props from './props';
import drawEvents from './drawEvent'
import Button from '../button';

export default {
  name: 'CqcSignBoard',
  props,
  components: {
    Button
  },
  setup(props, { emit }) {
    const canvasRef = ref(null)
    const {
      clear,
      getData,
      preview
    } = drawEvents(props, canvasRef, emit)
    const confirm = () => {
      emit('getData', getData())
    }
    return () => (
      <div class="cqc-sign-board">
        <canvas
          ref={canvasRef}
          width={props.width}
          height={props.height}
          class="cqc-sign-board-canvas"
        ></canvas>
        <div class="cqc-sign-board-control">
          <Button onclick={clear}>清空</Button>
          {props.previewBtn && <span style='padding:4px'></span> }
          {props.previewBtn && <Button type="primary" onclick={preview}>预览</Button>}
          <span style='padding:4px'></span>
          <Button type="primary" onclick={confirm}>确定</Button>
        </div>
      </div>
    )
  }
}