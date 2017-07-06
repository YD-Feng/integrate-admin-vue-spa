<template>
    <div class="cm-inner-page">
        <div class="top-btn-wrap">
            <el-button type="success" icon="d-arrow-left" @click="goBack">返回</el-button>
        </div>

        <div class="form-wrap">
            <!--选择设置贸易条款的方式-->
            <p class="title">选择设置贸易条款的方式</p>
            <div class="pt5px pb15px">
                <el-radio class="radio" v-model="form.is_bind_existed" label="绑定现有客户" disabled> 绑定现有客户</el-radio>
            </div>
            <div class="line"></div>

            <!--选择绑定客户-->
            <p class="title">选择绑定客户</p>
            <div class="cm-form-inline">
                <el-form :inline="true"
                         :model="form"
                         :rules="rules">
                    <el-form-item prop="customer_title">
                        <el-input v-model="form.customer_title" style="width: 400px;"></el-input>
                    </el-form-item>

                    <el-form-item style="margin-left: -25px;">
                        <el-button icon="plus" @click="selectCustom">选择客户</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="line"></div>

            <!--贸易条款设置-->
            <p class="title">贸易条款设置</p>
            <div class="cm-form-inline">
                <el-form :inline="true"
                         :model="form"
                         :rules="rules"
                         label-position="top">
                    <el-form-item label="价格套" prop="price_id">
                        <el-select v-model="form.price_id" style="width: 200px;">
                            <el-option label="全部" value=""></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="所属分公司" prop="org_id">
                        <el-select v-model="form.org_id" style="width: 200px;">
                            <el-option label="全部" value=""></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="配送仓库" prop="inv_id">
                        <el-select v-model="form.inv_id" disabled style="width: 200px;">
                            <el-option label="全部" value=""></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>

            <div class="pt15px pb15px">
                <el-button type="primary" style="width: 100px;" @click="submit">保存</el-button>
                <el-button type="danger" style="width: 100px;" @click="goBack">取消</el-button>
            </div>
        </div>

        <el-dialog
            title="选择客户"
            size="large"
            max-height="200"
            :visible.sync="dialogVisible">
            <custom-search-list></custom-search-list>
        </el-dialog>
    </div>
</template>

<script>
    module.exports = {
        replace: true,
        props: ['customId'],
        data: function () {
            return {
                form: {
                    is_bind_existed: '',
                    customer_id: '',
                    customer_title: '',
                    price_id: '',
                    org_id: '',
                    invs_id: ''
                },
                rules: {
                    price_id: [{
                        required: true,
                        message: '请选择价格套',
                        trigger: 'change'
                    }],
                    org_id: [{
                        required: true,
                        message: '请选择所属分公司',
                        trigger: 'change'
                    }]
                },
                dialogVisible: false
            }
        },
        methods: {
            goBack: function () {
                this.$parent.pageType = 1;
            },
            selectCustom: function () {
                this.dialogVisible = true;
            },
            submit: function () {
                console.info(this)
            }
        },
        components: {
            customSearchList: require('./custom-search-list.vue')
        }
    };
</script>

<style>

</style>
