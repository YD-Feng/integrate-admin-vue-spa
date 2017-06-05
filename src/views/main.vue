<template>
    <div class="page-wrap">
        <div class="header">
            <p class="title">运营系统</p>
            <p class="msg">
                欢迎你回来，<a href="#">admin</a>&nbsp;&nbsp;【<a href="#">注销</a>】
            </p>
        </div>
        <div class="menu-wrap" v-auto-height data-del-height="84">
            <el-menu default-active="1-1" theme="dark" @open="handleOpen" @close="handleClose" @select="handleSelect">
                <el-submenu index="1" class>
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item index="1-1" route="/main/simple-demo">选项1</el-menu-item>
                    <el-menu-item index="1-2" route="/main/form-demo">选项2</el-menu-item>
                    <el-menu-item index="1-3" route="/main/list-demo">选项3</el-menu-item>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
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
