<template>
  <div
    class="cqc-carousel"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div class="cqc-carousel-wrap" :style="style">
      <slot />
    </div>
    <div class="cqc-carousel-dots" v-if="showDots">
      <span
        v-for="item in len"
        :key="item"
        :class="['dot', { active: currentSelected === item - 1 }]"
        @click="go(item - 1)"
      ></span>
    </div>
    <template v-if="showBtn">
      <div class="cqc-carousel-prev-btn">
        <Button icon="cqc-icon-shuangjiantou-zuo" @click="go(currentSelected - 1, true)" />
      </div>
      <div class="cqc-carousel-next-btn">
        <Button icon="cqc-icon-shuangjiantou-you" @click="go(currentSelected + 1, true)" />
      </div>
    </template>
  </div>
</template>

<script>
import {
  onMounted,
  reactive,
  provide,
  computed,
  toRefs,
  nextTick,
  onBeforeUnmount
} from 'vue';
import Button from '../button';
import props from './props'
export default {
  name: 'CqcCarousel',
  components: {
    Button
  },
  props,
  setup(props, { emit }) {
    const state = reactive({
      showBtn: props.showBtn,
      showDots: props.showDots,
      currentIndex: 0, // 当前标记于子节点的索引
      len: 0, // 总长度
      currentSelected: props.initIndex,
      reverse: false
    });
    const changeIndex = () => {
      state.currentIndex++;
      state.len++;
    };
    let timer;
    provide('current', {
      state,
      changeIndex,
      duration: props.duration,
      timeFn: props.timeFn
    });
    // const children = slots.default(); vue3后这个只能拿到虚拟组件 这个不准确，因为如果子组件通过v-for来渲染，那么就会只有一个虚拟节点, 我们可以通过下面这种办法确定cqc-carousel-item的个数

    const methods = {
      run() {
        if (props.autoplay) {
          timer = setInterval(() => {
            const index = state.currentSelected;
            const newIndex = props.reverse ? index - 1 : index + 1;

            methods.go(newIndex, index);
          }, props.delay + props.duration);
        }
      },
      go(newIndex, flag) {
        const index = state.currentSelected;
        // 临界条件，到了最后一张的下一张就是第一张， 第二张的前一张就是最后一张
        if (newIndex === state.len) newIndex = 0;
        if (newIndex === -1) newIndex = state.len - 1;
        // 根据上一次的值和当前值 判断是正向还是反向
        state.reverse = index > newIndex ? true : false;
        if ((timer || flag) && props.loop) {
          if (index === 0 && newIndex === state.len - 1) {
            state.reverse = true;
          }
          if (index === state.len - 1 && newIndex === 0) {
            state.reverse = false;
          }
        }
        // 需要先把样式渲染到标签上，才能再改变currentSelected的值
        nextTick(() => {
          setTimeout(() => {
            state.currentSelected = newIndex;
            emit('change', newIndex)
          }, 0);
        });
      },
      handleMouseenter() {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      },
      handleMouseleave() {
        if (!timer) {
          methods.run();
        }
      }
    };
    onMounted(() => {
      state.len = state.currentIndex;
      methods.run();
    });
    onBeforeUnmount(() => {
      methods.handleMouseenter()
    })
    const style = computed(() => {
      return { height: props.height };
    });

    return {
      style,
      ...toRefs(state),
      ...methods
    };
  }
};
</script>