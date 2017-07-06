<template>
    <div>
        <div class="cm-form-inline">
            <el-form :inline="true"
                     :model="form"
                     label-position="top"
                     class="search-form">
                <el-form-item label="申请日期" class="cm-date-range" prop="date_range">
                    <el-date-picker
                        v-model="form.date_range"
                        type="daterange"
                        format="yyyy-MM-dd"
                        style="width: 200px;">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="推荐人" prop="recommend_by">
                    <el-input v-model="form.recommend_by" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="商店名称" prop="title">
                    <el-input v-model="form.title" style="width: 200px;"></el-input>
                </el-form-item>

                <el-form-item label="联系电话" prop="tel">
                    <el-input v-model="form.tel" style="width: 200px;"></el-input>
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
                prop="creation_date"
                label="申请日期"
                min-width="190">
            </el-table-column>

            <el-table-column
                prop="title"
                label="商店名称"
                min-width="180">
            </el-table-column>

            <el-table-column
                prop="tel"
                label="联系电话"
                min-width="120">
            </el-table-column>

            <el-table-column
                label="地址"
                min-width="300">
                <template scope="scope">
                    {{scope.row.store_id.province + ' ' + scope.row.store_id.city + ' ' + scope.row.store_id.county + ' ' + scope.row.store_id.address}}
                </template>
            </el-table-column>

            <el-table-column
                prop="recommend_by"
                label="推荐人"
                min-width="100">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                align="center"
                width="100">
                <template scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
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
        date_range: '',
        start: '',
        end: '',
        recommend_by: '',
        title: '',
        tel: ''
    };

    module.exports = {
        replace: true,
        data: function () {
            return {
                form: _.extend({}, formDefault),
                list: [
                    {
                        "id":1681,
                        "agent_code":"zskx_fs",
                        "store_id":{
                            "title":"小zzz",
                            "contacts":null,
                            "tel":"13138794666",
                            "province":"广东",
                            "city":"佛山",
                            "county":"禅城区",
                            "district":"禅城乡镇",
                            "address":"龙啸大明",
                            "recommend_by":"",
                            "store_id":1677
                        },
                        "status":"submit",
                        "created_by":0,
                        "creation_date":"2017-03-30T11:52:47.000Z",
                        "dealer":null,
                        "deal_date":null,
                        "address":"龙啸大明",
                        "recommend_by":"",
                        "title":"小zzz",
                        "tel":"13138794666"
                    },
                    {
                        "id":1676,
                        "agent_code":"zskx_fs",
                        "store_id":{
                            "title":"楚明boy测试",
                            "contacts":null,
                            "tel":"13970495411",
                            "province":"香港",
                            "city":"元朗区",
                            "county":"城区",
                            "district":"",
                            "address":"中山小道233号",
                            "recommend_by":"刘燕燕3",
                            "store_id":1578
                        },
                        "status":"submit",
                        "created_by":0,
                        "creation_date":"2017-02-17T02:20:23.000Z",
                        "dealer":null,
                        "deal_date":null,
                        "address":"中山小道233号",
                        "recommend_by":"刘燕燕3",
                        "title":"楚明boy测试",
                        "tel":"13970495411"
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
                this.$parent.curCustomId = row.customer_id;
                this.$parent.pageType = 2;
            }
        }
    };
</script>
