<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>运营系统</el-breadcrumb-item>
            <el-breadcrumb-item>列表页示例</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="cm-form cm-form-inline">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item><el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            </el-form>
        </div>

        <el-table
            :data="tableData"
            border
            height="200"
            style="width: 100%">
            <el-table-column
                fixed="left"
                type="selection"
                width="40">
            </el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                min-width="120">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="province"
                label="省份">
            </el-table-column>
            <el-table-column
                prop="city"
                label="市区">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                min-width="300">
            </el-table-column>
            <el-table-column
                prop="zip"
                label="邮编">
            </el-table-column>
            <el-table-column
                prop="zip"
                label="邮编">
            </el-table-column>
            <el-table-column
                prop="zip"
                label="邮编">
            </el-table-column>
            <el-table-column
                prop="zip"
                label="邮编">
            </el-table-column>
            <el-table-column
                prop="zip"
                label="邮编">
            </el-table-column>
            <el-table-column
                prop="zip"
                label="邮编">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                align="center"
                width="120">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
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
    module.exports = {
        created: function () {
            var _this = this;
            window.vm = _this;
        },
        data: function () {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }
                ],
                currentPage: 1,
                pageSize: 100,
                total: 500
            };
        },
        methods: {
            onSubmit: function () {
                console.log('submit!');
            },
            handleSizeChange: function (val) {
                console.log('每页' + val + '条');
            },
            handleCurrentChange: function (val) {
                console.log('当前页:' + val);
            }
        }
    };
</script>
