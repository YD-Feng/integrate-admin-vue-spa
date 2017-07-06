<template>
    <div>
        <div class="ic-top-btn-wrap">
            <el-button type="success" icon="d-arrow-left" @click="goBack">返回</el-button>
        </div>

        <div class="ic-form-wrap">
            <!--商店信息维护-->
            <p class="ic-title">商店信息维护（资料完整性维护，便于客户顺利使用）</p>
            <div class="cm-form-inline">
                <el-form :inline="true"
                         :model="form"
                         :rules="rules"
                         label-position="top">
                    <el-form-item label="客户名称" prop="customer_name">
                        <el-input v-model="form.customer_name" style="width: 200px;"></el-input>
                    </el-form-item>

                    <el-form-item label="客户编码" prop="customer_code">
                        <el-input v-model="form.customer_code" style="width: 200px;"></el-input>
                    </el-form-item>
                </el-form>
            </div>
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

                    <el-form-item label="配送仓库" prop="invs_id">
                        <el-input v-model="form.invs_id" style="width: 200px;"></el-input>
                    </el-form-item>

                    <el-form-item label="销售代表" prop="employee_name">
                        <el-input v-model="form.employee_name" style="width: 200px;"></el-input>
                    </el-form-item>
                </el-form>
            </div>

            <div class="pb15px ic-line">
                <el-button type="primary" style="width: 120px;" @click="submit">保存修改</el-button>
            </div>

            <!--邀请信息-->
            <p class="ic-title">邀请信息</p>
            <div class="cm-form-inline">
                <el-form :inline="true"
                         :model="form"
                         :rules="rules"
                         label-position="top">
                    <el-form-item label="联系人" prop="invs_id">
                        <el-input v-model="form.contacts" style="width: 200px;"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱" prop="invs_id">
                        <el-input v-model="form.email" style="width: 200px;"></el-input>
                    </el-form-item>

                    <el-form-item label="联系方式" prop="employee_name">
                        <el-input v-model="form.mobile" style="width: 200px;"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <p class="ic-title ic-title-blue">绑定码：807693615</p>

            <div class="pb15px">
                <el-checkbox v-model="form.invite_by_email"> 通过邮件向客户发送邀请</el-checkbox>
            </div>

            <div class="pb15px">
                <el-checkbox v-model="form.invite_by_mobile"> 通过短信向客户发送邀请</el-checkbox>
            </div>

            <div class="pb15px">
                <el-button type="primary" style="width: 120px;" @click="submit">发送邀请</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        replace: true,
        props: ['customId'],
        data: function () {
            return {
                form: {
                    customer_name: '',
                    customer_code: '',
                    price_id: '',
                    org_id: '',
                    invs_id: '',
                    employee_name: '',
                    contacts: '',
                    email: '',
                    mobile: '',
                    invite_by_email: false,
                    invite_by_mobile: false
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
                }
            }
        },
        methods: {
            goBack: function () {
                this.$parent.pageType = 1;
            },
            submit: function () {
                console.info(this)
            }
        }
    };
</script>

<style>
    .ic-top-btn-wrap{
        text-align: right;
        margin-top: -51px;
        line-height: 30px;
        padding-bottom: 5px;
        margin-bottom: 15px;
    }
    .ic-form-wrap{
        padding: 25px 25px 15px 25px;
        border: 1px solid #e2e2e2;
        border-radius: 4px;
        margin-bottom: 20px;
        background-color: #fbfbfb;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
    .ic-title{
        color: #009999;
        font-size: 14px;
        padding-bottom: 20px;
    }
    .ic-title-blue{
        color: #1970a9;
        font-weight: bold;
    }
    .ic-line{
        border-bottom: 1px dashed #e2e2e2;
        margin-bottom: 10px;
    }
</style>
