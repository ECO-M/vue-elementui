export default {
    data() {
        return {
            navgroup: [
                {
                    name: "动态分组1",
                    index: "1",
                    icon: "el-icon-location",
                    sonMenu: [
                        {
                            name: "列表",
                            router: { path: "/home/list" }
                        },
                        {
                            name: "表单",
                            router: { path: "/home/form" }
                        }, {
                            name: '表格',
                            router: { path: "/home/table" }
                        }, {
                            name: '搜索框',
                            router: { path: '/home/search' }
                        }
                    ]
                },
                {
                    name: "动态分组2",
                    index: "2",
                    icon: "el-icon-location",
                    sonMenu: [
                        {
                            name: "模态框",
                            router: { path: "/home/dialog" }
                        },
                        {
                            name: '树控件',
                            router: { path: '/home/tree' }
                        }
                    ]
                },
                {
                    name: "动态分组3",
                    index: "3",
                    icon: "el-icon-location",
                    sonMenu: [
                        {
                            name: "echars",
                            router: { path: "/home/echars" }
                        }
                    ]
                },
            ],
        }
    }
}