<template>
  <div>
    <DemoBlock
      title="icon图标"
      section="基本用法"
      :content="content1"
    >
      <template v-slot:example>
        <div class="icon-test">
          <i class="cqc-icon-yuyue"></i>
          <i class="cqc-icon-youhuiquan"></i>
          <i class="cqc-icon-loading1"></i>
        </div>
      </template>
      <template v-slot:descript>
        直接class="xxx"图标类名就可以拉
      </template>
    </DemoBlock>
    <h3>图标集合</h3>
    <div class="icon-group">
      <div class="icon-group-item" v-for="item in iconList" :key="item">
        <i :class="item"></i>
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const content1 = `
    <i class="cqc-icon-yuyue"></i>
    <i class="cqc-icon-youhuiquan"></i>
    <i class="cqc-icon-loading1"></i>

    `;

    const iconList = ref(null)
    iconList.value = [
      'cqc-icon-rili', 'cqc-icon-shuangjiantou-zuo', 'cqc-icon-shuangjiantou-you', 'cqc-icon-gouwuche', 'cqc-icon-daifukuan1',
      'cqc-icon-daifahuo', 'cqc-icon-danju', 'cqc-icon-left', 'cqc-icon-more', 'cqc-icon-tuikuan', 'cqc-icon-location', 'cqc-icon-daipingjia',
      'cqc-icon-icon-'
    ]
    return {
      content1,
      iconList
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-test {
  .i {
    margin-right: 20px;
  }
}
h3 {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 22px;
  margin: 55px 0 20px;
}
.icon-group {
  overflow: hidden;
  list-style: none;
  padding: 0!important;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}
.icon-group-item {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>