<template>
  <div class="user">
    <Bread :breadList="breadList"></Bread>
    <div class="serach">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label>
          <el-input v-model="formInline.depart" placeholder="角色名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="序号" align="center"></el-table-column>
        <el-table-column prop="address" label="角色名称" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="备注" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="getDepartDetail(scope.$index, scope.row)">详情</el-button>
            <el-button size="mini" type="danger" @click="deleteDepart(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../http/http";
export default {
  components: {
    Bread: () => import("../../components/c-bread.vue")
  },
  data() {
    return {
      breadList: ["角色管理"],
      formInline: {},
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      currentPage: 1,
      total: 10
    };
  }
};
</script>

<style lang="less" scoped>
.serach {
  margin-top: 10px;
}
.page {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
