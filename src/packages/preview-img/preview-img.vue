<template>
  <div class="cqc-preview-img" @click="handleClose">
    <div class="cqc-preview-img-content" @click.stop :style="{transform}">
      <div class="cqc-preview-img-title">{{ current + 1 }} / {{ imgArr.length }}</div>
      <div class="cqc-preview-img-wrap" :style="{ width: width + 'px', height: height + 'px'}">
        <div class="cqc-preview-img-list" :style="{transform: `translate(${translate}px)`}">
          <template  v-for="(img, i) in imgArr" :key="i">
            <img
              class="cqc-preview-img-item"
              :style="{ width: width + 'px', height: height + 'px'}"
              :src="img" />
          </template>
        </div>
      </div>
      <Icon icon="guanbi1" class="cqc-preview-img-close" @click.stop="handleClose"></Icon>
      <button
        class="cqc-preview-img-btn cqc-preview-img-prev"
        @click.stop="handleChangeIndex(current+1)"
        :disabled="(current === imgArr.length - 1) || imgArr.length === 0"
      >
        <Icon icon="left"></Icon>
      </button>
      <button
        class="cqc-preview-img-btn cqc-preview-img-next"
        @click.stop="handleChangeIndex(current-1)"
        :disabled="(current === 0) || imgArr.length === 0"
       >
        <Icon icon="right"></Icon>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import Icon from '../icon'
import props from './props'
export default {
  name: 'CqcPreviewImg',
  props,
  components: {
    Icon
  },
  setup(props) {
    const state = reactive({
      height: props.height,
      width: props.width,
      transform: 'scale(0.3)',
      imgArr: props.imgArr,
      current: props.index,
      translate: 0
    })

    const methods = {
      handleClose() {
        state.transform = 'scale(0.3)'
        setTimeout(() => {
          props.closeCb && props.closeCb()
        }, 300);
      },
      handleChangeIndex(cur) {
        const len = state.imgArr.length;
        if (cur > len - 1) cur = len - 1;
        if (cur < 0) cur = 0;
        state.current = cur
        state.translate = -props.width * cur
      }
    }
    methods.handleChangeIndex(state.current)
    onMounted(() => {
      setTimeout(() => {
        state.transform = 'scale(1)'
      }, 0);
    })
    return {
      ...methods,
      ...toRefs(state)
    }
  }
}
</script>