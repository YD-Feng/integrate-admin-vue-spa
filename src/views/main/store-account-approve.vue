<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>下游客户</el-breadcrumb-item>
            <el-breadcrumb-item>客户管理</el-breadcrumb-item>
            <el-breadcrumb-item>帐号申请列表</el-breadcrumb-item>
            <el-breadcrumb-item v-if="pageType == 2">申请审批</el-breadcrumb-item>
        </el-breadcrumb>

        <account-search-list v-show="pageType == 1"></account-search-list>
        <account-approve v-show="pageType == 2" :custom-id="curAccountId"></account-approve>
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
                pageType: 1,
                curAccountId: ''
            }
        },
        components: {
            accountSearchList: require('./store-account-approve/account-search-list.vue'),
            accountApprove: require('./store-account-approve/account-approve.vue')
        }
    };
</script>
