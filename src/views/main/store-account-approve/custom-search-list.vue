<template>
    <div class="dialog-page-wrap">
        <div class="cm-form-inline">
            <el-form :inline="true"
                     :model="form"
                     label-position="top"
                     class="search-form">
                <el-form-item label="客户名称" prop="title">
                    <el-input v-model="form.title" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="客户编码" prop="customer_code">
                    <el-input v-model="form.customer_code" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="ERP编码" prop="local_erp_code">
                    <el-input v-model="form.local_erp_code" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="所属分公司" prop="customer_org">
                    <el-select v-model="form.customer_org" disabled style="width: 200px;">
                        <el-option label="全部" value=""></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="客户类型" prop="customer_type">
                    <el-select v-model="form.customer_type" disabled style="width: 200px;">
                        <el-option label="全部" value=""></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="　">
                    <el-button type="primary" @click="search">查询</el-button>
                    <el-button type="danger" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table
            :data="list"
            border
            style="width: 100%">
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
                prop="org_id.title"
                label="所属分公司"
                min-width="220">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                align="center"
                width="120">
                <template scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">选择</el-button>
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
    var _ = require('underscore');

    const formDefault = {
        title: '',
        customer_code: '',
        local_erp_code: '',
        customer_org: '',
        customer_type: ''
    };

    module.exports = {
        replace: true,
        data: function () {
            return {
                form: _.extend({}, formDefault),
                list: [
                    {
                        "customer_id":807500197,
                        "cs_customer_id":"1.2",
                        "agent_code":"zskx_fs",
                        "code":"1.2.018",
                        "local_erp_code":"null",
                        "title":"禅城区起旺便利店",
                        "kind":"小食杂店-ST",
                        "oper_id":0,
                        "price_set_id":{
                            "title":"零售价1",
                            "price_set_id":1854
                        },
                        "org_id":{
                            "title":"掌上快销/掌上快销总部",
                            "org_id":793
                        },
                        "inv_id":{
                            "title":"掌上快销总部仓",
                            "inv_id":2908
                        },
                        "employee_id":{
                            "employee_id":0,
                            "employee_name":""
                        },
                        "status":"enable",
                        "contacts":"方笑华",
                        "mobile":"83210327",
                        "tel":"null",
                        "email":"null",
                        "address":"送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                        "coordinate":"113.16375138666,22.957660059217",
                        "is_need_find_coor":0,
                        "receive_contacts":"0",
                        "receive_address":"null",
                        "receive_tel":"null",
                        "remark":"null",
                        "seq":500,
                        "created_by":283796,
                        "creation_date":"2016-06-21T07:43:44.000Z",
                        "last_updated_by":20867,
                        "last_update_date":"2016-08-09T08:28:23.000Z",
                        "is_bind_store":0,
                        "rel_id":9532,
                        "invited_code":"807500197",
                        "invited_contacts":"方笑华",
                        "invited_mobile":"83210327",
                        "invited_email":"null",
                        "bind_date":"2016-12-22T07:24:33.000Z",
                        "store_id":null,
                        "store_title":null,
                        "store_tel":null,
                        "recommend_by":null
                    },
                    {
                        "customer_id":807500197,
                        "cs_customer_id":"1.2",
                        "agent_code":"zskx_fs",
                        "code":"1.2.018",
                        "local_erp_code":"null",
                        "title":"禅城区起旺便利店",
                        "kind":"小食杂店-ST",
                        "oper_id":0,
                        "price_set_id":{
                            "title":"零售价1",
                            "price_set_id":1854
                        },
                        "org_id":{
                            "title":"掌上快销/掌上快销总部",
                            "org_id":793
                        },
                        "inv_id":{
                            "title":"掌上快销总部仓",
                            "inv_id":2908
                        },
                        "employee_id":{
                            "employee_id":0,
                            "employee_name":""
                        },
                        "status":"enable",
                        "contacts":"方笑华",
                        "mobile":"83210327",
                        "tel":"null",
                        "email":"null",
                        "address":"送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                        "coordinate":"113.16375138666,22.957660059217",
                        "is_need_find_coor":0,
                        "receive_contacts":"0",
                        "receive_address":"null",
                        "receive_tel":"null",
                        "remark":"null",
                        "seq":500,
                        "created_by":283796,
                        "creation_date":"2016-06-21T07:43:44.000Z",
                        "last_updated_by":20867,
                        "last_update_date":"2016-08-09T08:28:23.000Z",
                        "is_bind_store":0,
                        "rel_id":9532,
                        "invited_code":"807500197",
                        "invited_contacts":"方笑华",
                        "invited_mobile":"83210327",
                        "invited_email":"null",
                        "bind_date":"2016-12-22T07:24:33.000Z",
                        "store_id":null,
                        "store_title":null,
                        "store_tel":null,
                        "recommend_by":null
                    },
                    {
                        "customer_id":807500197,
                        "cs_customer_id":"1.2",
                        "agent_code":"zskx_fs",
                        "code":"1.2.018",
                        "local_erp_code":"null",
                        "title":"禅城区起旺便利店",
                        "kind":"小食杂店-ST",
                        "oper_id":0,
                        "price_set_id":{
                            "title":"零售价1",
                            "price_set_id":1854
                        },
                        "org_id":{
                            "title":"掌上快销/掌上快销总部",
                            "org_id":793
                        },
                        "inv_id":{
                            "title":"掌上快销总部仓",
                            "inv_id":2908
                        },
                        "employee_id":{
                            "employee_id":0,
                            "employee_name":""
                        },
                        "status":"enable",
                        "contacts":"方笑华",
                        "mobile":"83210327",
                        "tel":"null",
                        "email":"null",
                        "address":"送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                        "coordinate":"113.16375138666,22.957660059217",
                        "is_need_find_coor":0,
                        "receive_contacts":"0",
                        "receive_address":"null",
                        "receive_tel":"null",
                        "remark":"null",
                        "seq":500,
                        "created_by":283796,
                        "creation_date":"2016-06-21T07:43:44.000Z",
                        "last_updated_by":20867,
                        "last_update_date":"2016-08-09T08:28:23.000Z",
                        "is_bind_store":0,
                        "rel_id":9532,
                        "invited_code":"807500197",
                        "invited_contacts":"方笑华",
                        "invited_mobile":"83210327",
                        "invited_email":"null",
                        "bind_date":"2016-12-22T07:24:33.000Z",
                        "store_id":null,
                        "store_title":null,
                        "store_tel":null,
                        "recommend_by":null
                    },
                    {
                        "customer_id":807500197,
                        "cs_customer_id":"1.2",
                        "agent_code":"zskx_fs",
                        "code":"1.2.018",
                        "local_erp_code":"null",
                        "title":"禅城区起旺便利店",
                        "kind":"小食杂店-ST",
                        "oper_id":0,
                        "price_set_id":{
                            "title":"零售价1",
                            "price_set_id":1854
                        },
                        "org_id":{
                            "title":"掌上快销/掌上快销总部",
                            "org_id":793
                        },
                        "inv_id":{
                            "title":"掌上快销总部仓",
                            "inv_id":2908
                        },
                        "employee_id":{
                            "employee_id":0,
                            "employee_name":""
                        },
                        "status":"enable",
                        "contacts":"方笑华",
                        "mobile":"83210327",
                        "tel":"null",
                        "email":"null",
                        "address":"送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                        "coordinate":"113.16375138666,22.957660059217",
                        "is_need_find_coor":0,
                        "receive_contacts":"0",
                        "receive_address":"null",
                        "receive_tel":"null",
                        "remark":"null",
                        "seq":500,
                        "created_by":283796,
                        "creation_date":"2016-06-21T07:43:44.000Z",
                        "last_updated_by":20867,
                        "last_update_date":"2016-08-09T08:28:23.000Z",
                        "is_bind_store":0,
                        "rel_id":9532,
                        "invited_code":"807500197",
                        "invited_contacts":"方笑华",
                        "invited_mobile":"83210327",
                        "invited_email":"null",
                        "bind_date":"2016-12-22T07:24:33.000Z",
                        "store_id":null,
                        "store_title":null,
                        "store_tel":null,
                        "recommend_by":null
                    },
                    {
                        "customer_id":807500197,
                        "cs_customer_id":"1.2",
                        "agent_code":"zskx_fs",
                        "code":"1.2.018",
                        "local_erp_code":"null",
                        "title":"禅城区起旺便利店",
                        "kind":"小食杂店-ST",
                        "oper_id":0,
                        "price_set_id":{
                            "title":"零售价1",
                            "price_set_id":1854
                        },
                        "org_id":{
                            "title":"掌上快销/掌上快销总部",
                            "org_id":793
                        },
                        "inv_id":{
                            "title":"掌上快销总部仓",
                            "inv_id":2908
                        },
                        "employee_id":{
                            "employee_id":0,
                            "employee_name":""
                        },
                        "status":"enable",
                        "contacts":"方笑华",
                        "mobile":"83210327",
                        "tel":"null",
                        "email":"null",
                        "address":"送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                        "coordinate":"113.16375138666,22.957660059217",
                        "is_need_find_coor":0,
                        "receive_contacts":"0",
                        "receive_address":"null",
                        "receive_tel":"null",
                        "remark":"null",
                        "seq":500,
                        "created_by":283796,
                        "creation_date":"2016-06-21T07:43:44.000Z",
                        "last_updated_by":20867,
                        "last_update_date":"2016-08-09T08:28:23.000Z",
                        "is_bind_store":0,
                        "rel_id":9532,
                        "invited_code":"807500197",
                        "invited_contacts":"方笑华",
                        "invited_mobile":"83210327",
                        "invited_email":"null",
                        "bind_date":"2016-12-22T07:24:33.000Z",
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
                this.form = _.extend({}, formDefault);
            },
            handleClick: function (row) {
                //由于用 dialog 组件进行嵌套了，所以需要访问祖父级组件,才能顺利操作
                var parent = this.$parent.$parent;
                parent.form.customer_title = row.title;
                parent.form.customer_id = row.customer_id;
                parent.dialogVisible = false;
            }
        }
    };
</script>
