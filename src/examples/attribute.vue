<template>
  <div class="attribute">
    <h3>{{title}}</h3>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item">
          <td>{{ item.prop }}</td>
          <td>{{ item.msg }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.range }}</td>
          <td>{{ item.default }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '属性'
    },
    data: Array
  }
}
</script>

<style lang="scss">
.attribute {
  h3 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    th {
      text-align: left;
      white-space: nowrap;
      color: #909399;
      font-weight: 400;
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      max-width: 250px;
      &:first-child {
        padding-left: 10px;
      }
    }
    td {
      color: #606266;
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      max-width: 250px;
      &:first-child {
        padding-left: 10px;
      }
    }
  }
  tbody {
    width: 100%;
  }
}
</style>