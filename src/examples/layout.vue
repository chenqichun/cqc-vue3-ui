<template>
  <div class="layout">
    <header>
      <div class="title">cqc-vue3-ui</div>
      <div class="right">
        <span>
          <router-link to="/about">关于</router-link>
        </span>
        <span>
          <a href="https://github.com/chenqichun/cqc-vue3-ui.git" target="_blank">
            GitHub
            <i class="cqc-icon-fenxiang"></i>
          </a>
        </span>
      </div>
    </header>
    <aside>
      <template v-for="router in routes" :key="router.path">
        <router-link
          v-if="!router.meta.hide"
          class="aside-item"
          :class="{active: currpath === router.path}"
          :to="router.path"
        >
          {{ router.meta.title }}
          <i class="cqc-icon-right cqc-icon"></i>
        </router-link>
      </template>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { routes } from '@/router'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const currpath = ref(null);
    const route = useRoute()
    watch(() => route.path, val => {
      currpath.value = val
    }, { immediate: true, deep: true })
    return {
      routes: routes[0].children,
      currpath
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #3eaf7c;
}
$color: #2c3e50;
$color-hover: #3eaf7c;
.router-link-active {
  border-color: $color-hover;
  color: $color-hover !important;
}
.layout {
  color: $color;
  header {
    position: fixed;
    top: 0;
    height: 58px;
    left: 0;
    right: 0;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 28px;
      font-weight: bold;
      padding-left: 20px;
      span {
        font-size: 20px;
      }
    }
    .right {
      padding-right: 20px;
      font-size: 18px;
      display: flex;
      align-items: center;
      span {
        margin: 0 10px;
        line-height: 28px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        &:hover, &:hover a {
          border-color: $color-hover;
          color: $color-hover;
        }
      }
    }
  }
  aside {
    position: fixed;
    top: 0;
    left: 0;
    top: 58px;
    bottom: 0;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
    background: #fff;
    overflow-y: auto;
    width: 300px;
    overflow-x: hidden;
    .aside-item {
      position: relative;
      display: block;
      text-decoration: none;
      box-sizing: border-box;
      padding: 10px 30px;
      width: 100%;
      font-size: 18px;
      color: $color;
      border-bottom: 1px solid #dbdbdb;
      transition: transform 0.3s ease;
      &:hover, &.active {
        color: $color-hover;
        transform: translateX(10px);
        .cqc-icon {
          fill: $color-hover
        }
      }
      .cqc-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  main {
    position: fixed;
    top: 58px;
    left: 300px;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 30px 50px;
    overflow-y: auto;
  }
}
</style>