<template>
  <div class="about">
     <div v-if="flase">
          接种时间:
          <a-range-picker
            size="large"
            :value="createValue"
            format="YYYY-MM-DD"
            @change="dateChange"
          />
        </div>

            <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private createValue = null
  private tableData:[] = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]

  dateChange (e:Event, date:Array<string>):void {
    console.log(e, date)
    this.createValue = date as any
  }
}

</script>

<style lang="scss" scoped>

</style>
