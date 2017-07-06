<template>
    <div class="page-wrap">
        <div class="header">
            <p class="title">掌上快销-管理后台</p>
            <p class="msg">
                欢迎你回来，<a href="#">admin</a>&nbsp;&nbsp;【<a href="#">注销</a>】
            </p>
        </div>
        <div class="menu-wrap" v-auto-height data-del-height="84">
            <el-menu theme="dark" @open="handleOpen" @close="handleClose" @select="handleSelect">

                <el-submenu index="1" class>
                    <template slot="title"><i class="el-icon-message"></i>下游客户</template>
                    <el-submenu index="1-1">
                        <template slot="title">客户管理</template>
                        <el-menu-item index="1-1-1" route="/main/store-account-info">帐号管理</el-menu-item>
                        <el-menu-item index="1-1-2" route="/main/store-account-approve">帐号申请审批</el-menu-item>
                    </el-submenu>
                </el-submenu>

                <el-submenu index="2" class>
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item index="2-1" route="/main/simple-demo">选项1</el-menu-item>
                    <el-menu-item index="2-2" route="/main/form-demo">选项2</el-menu-item>
                    <el-menu-item index="2-3" route="/main/list-demo">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3"><i class="el-icon-menu"></i>导航二</el-menu-item>
                <el-menu-item index="4"><i class="el-icon-setting"></i>导航三</el-menu-item>
            </el-menu>
        </div>
        <div class="cont-wrap" v-auto-height data-del-height="84">
            <router-view></router-view>
        </div>
        <div class="footer">2017 © Powered By <a href="#">技术研发部</a></div>
    </div>
</template>

<script>
    module.exports = {
        created: function () {
            var _this = this;
            window.vm = _this;
        },
        data: function () {
            return {
                frames: [{
                    name: 'simple'
                }]
            }
        },
        methods: {
            handleOpen: function (index, indexPath, item) {
                console.log(index, indexPath);
            },
            handleClose: function (index, indexPath, item) {
                console.log(index, indexPath);
            },
            handleSelect: function (index, indexPath, item) {
                this.$router.push({
                    path: item.route
                });
            }
        }
    };
</script>
