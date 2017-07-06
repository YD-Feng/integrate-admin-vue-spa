<template>
    <div>
        <div class="cm-form-inline">
            <el-form :inline="true"
                     :model="form"
                     label-position="top"
                     class="search-form">
                <el-form-item label="本地ERP编码" prop="local_erp_code">
                    <el-input v-model="form.local_erp_code" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="客户名称" prop="customer_name">
                    <el-input v-model="form.customer_name" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="客户编码" prop="customer_code">
                    <el-input v-model="form.customer_code" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="绑定门店账号" prop="store_tel">
                    <el-input v-model="form.store_tel" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="客户类型" prop="customer_type">
                    <el-select v-model="form.customer_type" style="width: 200px;">
                        <el-option label="全部" value=""></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="绑定日期" class="cm-date-range" prop="date_range">
                    <el-date-picker
                        v-model="form.date_range"
                        type="daterange"
                        format="yyyy-MM-dd"
                        style="width: 200px;">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="分公司" prop="org_id">
                    <el-select v-model="form.org_id" style="width: 200px;">
                        <el-option label="全部" value=""></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="销售代表" prop="employee_name">
                    <el-input v-model="form.employee_name" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="推荐人" prop="recommend_by">
                    <el-input v-model="form.recommend_by" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="开通状态" prop="status">
                    <el-select v-model="form.status" style="width: 200px;">
                        <el-option label="全部" value=""></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="　">
                    <el-button type="primary" @click="search">查询</el-button>
                    <el-button type="danger" @click="reset">重置</el-button>
                    <el-button type="warning" @click="doImport">导入</el-button>
                    <el-button type="success" @click="doExport">导出</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table
            :data="list"
            border
            style="width: 100%">
            <el-table-column
                fixed="left"
                type="selection"
                width="40">
            </el-table-column>

            <el-table-column
                prop="code"
                label="客户编码"
                min-width="120">
            </el-table-column>

            <el-table-column
                prop="title"
                label="客户名称"
                min-width="150">
            </el-table-column>

            <el-table-column
                prop="local_erp_code"
                label="本地ERP编码"
                min-width="180">
            </el-table-column>

            <el-table-column
                prop="kind"
                label="客户类型"
                min-width="120">
            </el-table-column>

            <el-table-column
                prop="contacts"
                label="联系人"
                min-width="100">
            </el-table-column>

            <el-table-column
                prop="entire"
                label="贸易条款"
                min-width="100">
            </el-table-column>

            <el-table-column
                prop="is_bind_store"
                label="状态"
                min-width="120">
                <template scope="scope">
                    <span :style="{color: (scope.row.is_bind_store ? '' : '#f35750')}">{{scope.row.is_bind_store ? '已开通' : '未开通'}}</span>
                </template>
            </el-table-column>

            <el-table-column
                prop="org_id.title"
                label="分公司"
                min-width="220">
            </el-table-column>

            <el-table-column
                prop="employee_id.employee_name"
                label="销售代表"
                min-width="100">
            </el-table-column>

            <el-table-column
                prop="recommend_by"
                label="推荐人"
                min-width="100">
            </el-table-column>

            <el-table-column
                prop="store_title"
                label="绑定门店名称"
                min-width="180">
            </el-table-column>

            <el-table-column
                prop="store_tel"
                label="绑定门店账号"
                min-width="160">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                align="center"
                width="120">
                <template scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">邀请开通</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="cm-pagination-wrap">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="pageSize"
                :total="total"
                layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    //var _ = require('underscore');
    import _ from 'underscore';

    const formDefault = {
        local_erp_code: '',
        customer_name: '',
        customer_code: '',
        store_tel: '',
        customer_type: '',
        date_range: '',
        start: '',
        end: '',
        org_id: '',
        employee_name: '',
        recommend_by: '',
        status: ''
    };

    module.exports = {
        replace: true,
        data: function () {
            return {
                form: _.extend({}, formDefault),
                list: [
                    {
                        "customer_id":807693615,
                        "cs_customer_id":"zs.03.161",
                        "agent_code":"zskx_fs",
                        "code":"zs.03.161",
                        "local_erp_code":null,
                        "title":"永利0",
                        "kind":"测试分类",
                        "oper_id":null,
                        "price_set_id":{
                            "title":"零售价1",
                            "price_set_id":1854
                        },
                        "org_id":{
                            "title":"总部",
                            "org_id":714
                        },
                        "inv_id":{
                            "title":"佛山禅城仓库",
                            "inv_id":2876
                        },
                        "employee_id":{
                            "employee_id":0,
                            "employee_name":""
                        },
                        "status":"enable",
                        "contacts":null,
                        "mobile":"15920089189",
                        "tel":null,
                        "email":null,
                        "address":"利群路口1号",
                        "coordinate":null,
                        "is_need_find_coor":1,
                        "receive_contacts":null,
                        "receive_address":null,
                        "receive_tel":null,
                        "remark":null,
                        "seq":500,
                        "created_by":20867,
                        "creation_date":"2017-04-16T19:23:11.000Z",
                        "last_updated_by":20867,
                        "last_update_date":"2017-05-03T05:59:03.000Z",
                        "is_bind_store":0,
                        "rel_id":9606,
                        "invited_code":"807693615",
                        "invited_contacts":null,
                        "invited_mobile":"15920089189",
                        "invited_email":null,
                        "bind_date":"2017-04-25T10:03:12.000Z",
                        "store_id":null,
                        "store_title":null,
                        "store_tel":null,
                        "recommend_by":null
                    }
                ],
                currentPage: 1,
                pageSize: 100,
                total: 500
            }
        },
        methods: {
            search: function () {

            },
            reset: function () {

            },
            doImport: function () {

            },
            doExport: function () {

            },
            handleClick: function (row) {
                this.$parent.curCustomId = row.customer_id;
                this.$parent.pageType = 2;
            }
        }
    };
</script>
