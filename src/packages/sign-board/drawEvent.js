import PreviewImg from '../preview-img';
import { nextTick, onMounted } from 'vue'

export default function drawEvents(props, canvasRef, emit) {
  let flag = true;
  let cavClientLeft, cavClientTop, canvas, ctx;
  const { lineWidth, strokeStyle, lineCap, lineDash, doubleLine, miniType, canvasBg, width, height } = props

  function setCanvasStyle(ctx) {
    if (canvasBg) {
      ctx.fillStyle = canvasBg
      ctx.fillRect(0, 0, width, height)
    }
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = strokeStyle
    ctx.lineCap = lineCap
    if (lineDash[0] > 0 || lineDash[1] > 0) {
      ctx.setLineDash(lineDash)
    }
  }
  function draw(ctx, x, y) {
    if (!flag) return false;
    ctx.lineTo(x, y)
    ctx.stroke()
  }
  function drawStart(ctx, x, y) {
    doubleLine && ctx.save()
    ctx.beginPath()
    ctx.moveTo(x, y)
    flag = true;
  }
  function drawEnd(ctx) {
    if (doubleLine) {
      ctx.globalCompositeOperation = 'destination-out'
      ctx.lineWidth = parseInt(lineWidth / 3)
      ctx.stroke()
      ctx.restore()
    }
    flag = false;
  }
  function clear() {
    ctx.clearRect(0, 0, width, height)
  }
  function preview() {
    const baseImg = canvasRef.value.toDataURL(miniType);
    PreviewImg([baseImg])
  }
  function confirm() {
    const baseImg = canvasRef.value.toDataURL(miniType);
    emit('confirm', baseImg)
  }

  function onmousedown(e) {
    cavClientLeft = canvas.getBoundingClientRect().left
    cavClientTop = canvas.getBoundingClientRect().top
    drawStart(ctx, e.clientX - cavClientLeft, e.clientY - cavClientTop)
    canvas.onmousemove = e => {
      draw(ctx, e.clientX - cavClientLeft, e.clientY - cavClientTop)
    }
    window.addEventListener('mouseup', () => {
      drawEnd(ctx)
    })
  }

  function init() {
    canvas = canvasRef.value
    ctx = canvas.getContext('2d')
    setCanvasStyle(ctx)
    canvas.onmousedown = onmousedown
  }

  onMounted(() => {
    nextTick(() => {
      setTimeout(() => {
        init()
      }, 200);
    })
  })

  return {
    clear,
    preview,
    confirm
  }
}