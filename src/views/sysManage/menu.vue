<template>
  <div class="user">
    <Bread :breadList="breadList"></Bread>
    <el-row class="margin">
      <el-col :span="3">
        <div class="tree">
          <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
      </el-col>
      <el-col :span="20" :offset="1">
        <div class="section">
          <div class="operate-bar">
            <div class="add">
              <!-- <el-button>新增</el-button>
              <el-button>冻结</el-button>
              <el-button>解除冻结</el-button> -->
            </div>
            <div class="serach">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label>
                  <el-input v-model="formInline.depart" placeholder="菜单名称/层级  "></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="table">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column prop="name" label="序号" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="菜单名称" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="层级" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="菜单编号" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="菜单父编号" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="是否是菜单" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="状态" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                  <el-button size="mini" @click="getDepartDetail(scope.$index, scope.row)">详情</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="deleteDepart(scope.$index, scope.row)"
                  >删除</el-button>
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import http from '../../http/http'
export default {
  components: {
    Bread: () => import("../../components/c-bread.vue")
  },
  data() {
    return {
      breadList: ["菜单管理"],
       //tree
      treeData: [],
      defaultProps: {
        children: "children",
        label: "name"
      },
      //form
      formInline: {
        depart: ""
      },
      //table
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
      //page
      currentPage: 1,
      total: 100
    };
  },
  methods:{
    handleNodeClick(){},
    onSubmit(){},
    handleSelectionChange(){},
    handleCurrentChange(){},
    handleSizeChange(){},
    getDepartDetail(){},
    deleteDepart(){},
  }
};
</script>

<style lang="less" scoped>
.margin {
  margin-top: 20px;
}
.tree {
  outline: 1px solid black;
}
.section {
  .operate-bar {
    height: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid silver;
  }
  .page {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
