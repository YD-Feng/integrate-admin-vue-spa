<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>下游客户</el-breadcrumb-item>
            <el-breadcrumb-item>客户管理</el-breadcrumb-item>
            <el-breadcrumb-item>帐号管理</el-breadcrumb-item>
            <el-breadcrumb-item v-if="pageType == 2">邀请开通</el-breadcrumb-item>
        </el-breadcrumb>

        <search-list v-show="pageType == 1"></search-list>
        <invite-custom v-show="pageType == 2" :custom-id="curCustomId"></invite-custom>
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
                curCustomId: ''
            }
        },
        components: {
            searchList: require('./store-account-info/search-list.vue'),
            inviteCustom: require('./store-account-info/invite-custom.vue')
        }
    };
</script>
