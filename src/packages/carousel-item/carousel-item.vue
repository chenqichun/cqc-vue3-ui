<template>
  <transition name="carousel">
    <div
      class="cqc-carousel-item"
      v-if="isVisible"
      :class="classs"
      :style="styles"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  name: 'CqcCarouselItem',
  setup() {
    const { state, changeIndex, duration, timeFn } = inject('current');
    const currentIndex = state.currentIndex;
    const isVisible = computed(() => {
      return state.currentSelected === currentIndex;
    });
    const classs = computed(() => {
      return state.reverse ? 'reverse' : '';
    });
    const styles = computed(() => {
      return {
        'transition-duration': duration / 1000 + 's',
        'transition-timing-function': timeFn
      };
    });

    changeIndex();
    return {
      isVisible,
      classs,
      styles
    };
  }
};
</script>