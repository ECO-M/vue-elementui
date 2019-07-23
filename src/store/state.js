/**
 * @param {navgroup} 动态菜单数据
 */
export default {
    userInfo: null,
    navgroup: [
        {
            name: "系统管理",
            index: "1",
            icon: "el-icon-location",
            sonMenu: [
                {
                    name: "用户管理",
                    router: { path: "/home/user" }
                },
                {
                    name: "角色管理",
                    router: { path: "/home/role" }
                },
                {
                    name: '菜单管理',
                    router: { path: "/home/menu" }
                },
                {
                    name: '部门管理',
                    router: { path: '/home/depart' }
                },
                {
                    name: '通知管理',
                    router: { path: '/home/notice' }
                },
            ]
        },
        {
            name: "门店管理",
            index: "2",
            icon: "el-icon-location",
            sonMenu: [
                {
                    name: "技师管理",
                    router: { path: "/home/dialog" }
                },
            ]
        },
        {
            name: "配件管理",
            index: "3",
            icon: "el-icon-location",
            sonMenu: [
                {
                    name: "配件分类",
                    router: { path: "/home/echars" }
                },
                {
                    name: "配件列表",
                    router: { path: "/home/echars" }
                }, 
                {
                    name: "配件订单",
                    router: { path: "/home/echars" }
                }

            ]
        },
        {
            name: "订单管理",
            index: "3",
            icon: "el-icon-location",
            sonMenu: [
                {
                    name: "订单列表",
                    router: { path: "/home/allorder" }
                }
            ]
        },
    ],
}