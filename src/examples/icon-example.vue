<template>
  <div>
    <DemoBlock
      title="icon图标"
      section="基本用法"
      :content="content1"
    >
      <template v-slot:example>
        <div class="icon-test">
          <cqc-icon icon="yuyue"></cqc-icon>
          <cqc-icon icon="youhuiquan"></cqc-icon>
          <cqc-icon icon="loading1"></cqc-icon>
        </div>
      </template>
      <template v-slot:descript>
        先引入Icon组件，就可以使用拉
        <p style="color:red; opacity:0.9">(注: 虽然icon是svg格式的，但是已经把fill属性值都改成currentColor了，所以可以通过color来修改颜色，如 style="color:red")</p>
      </template>
    </DemoBlock>
    <ArbBlock :data="list"/>
    <h3>图标集合</h3>
    <div class="icon-group">
      <div class="icon-group-item" v-for="item in iconList" :key="item">
        <cqc-icon :icon="item"></cqc-icon>
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
    <cqc-icon icon="yuyue"></cqc-icon>
    <cqc-icon icon="youhuiquan"></cqc-icon>
    <cqc-icon icon="loading1"></cqc-icon>

    <script>
      import { CqcIcon } from 'cqc-vue3-ui'
      export default {
        components: {
          CqcIcon
        }
      }
    <\/script>
    `;

    const iconList = ref(null)
    const list = ref([])
    list.value = [
      { prop: 'icon', msg: '图标名字', type: 'string', range: '-', default: '-' }
    ]
    iconList.value = [
      'rili', 'shuangjiantou-zuo', 'shuangjiantou-you', 'gouwuche', 'daifukuan1',
      'daifahuo', 'danju', 'left', 'more', 'tuikuan', 'location', 'daipingjia',
      'icon-'
    ]
    return {
      content1,
      iconList,
      list
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-test {
  .cqc-icon {
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