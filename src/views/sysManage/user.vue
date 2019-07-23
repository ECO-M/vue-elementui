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
              <el-button>新增</el-button>
              <el-button>冻结</el-button>
              <el-button>解除冻结</el-button>
            </div>
            <div class="serach">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label>
                  <el-input v-model="formInline.depart" placeholder="名称/电话"></el-input>
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
              <el-table-column prop="name" label="部门名称" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="账号" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="角色名" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="名字" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="性别" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="电话" align="center" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="邮箱" align="center" show-overflow-tooltip></el-table-column>
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
import http from "../../http/http";
export default {
  components: {
    Bread: () => import("../../components/c-bread.vue")
  },
  data() {
    return {
      breadList: ["用户管理"],
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
  created() {
    this.getTree();
  },
  methods: {
    /**
     * element回调
     * @method {}
     * @method {}
     */
    handleNodeClick(data) {
      console.log(data);
    },
    onSubmit() {},
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCurrentChange() {},
    handleSizeChange() {},
    /**
     * 自定义函数
     * @method {getTree}
     * @method {getTable}
     * @method {getDepartDetail}
     * @method {addDepart}
     * @method {changeDepartInfo}
     * @method {deleteDepart}
     */
    getTree() {
      http("/deptmanagemnet/depttreelist", "get").then(res => {
        this.treeData = res;
        let arr = [{ id: 1, pid: 0 }, { id: 2, pid: 1 }, { id: 3, pid: 1 }];
        console.log(res);
        let a = this.setTreeData(res);
        console.log(a);
      });
    },
    setTreeData(source) {
      let cloneData = JSON.parse(JSON.stringify(source)); // 对源数据深度克隆
      return cloneData.filter(father => {
        // 循环所有项，并添加children属性
        let branchArr = cloneData.filter(child => father.id == child.pid); // 返回每一项的子级数组
        branchArr.length > 0 ? (father.children = branchArr) : ""; //给父级添加一个children属性，并赋值
        return father.pid == 0; //返回第一层
      });
    },
    getTable(currentPage, pageSize) {
      http("/deptmanagemnet/deptlist", "post", {
        currentPage: currentPage || 1,
        pageSize: pageSize || 10,
        deptid: ""
      }).then(res => {
        debugger;
      });
    },
    getDepartDetail() {},
    addDepart() {},
    changeDepartInfo() {},
    deleteDepart() {}
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
