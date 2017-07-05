<template>
    <div class="schedule-panel">
        <div class="schedule-panel-body-wrapper">
            <div class="schedule-body">
                <div class="schedule-header">
                    <button type="button" class="schedule-header-btn schedule-header-prev-btn el-icon-d-arrow-left" @click="prevYear"></button>
                    <button type="button" class="schedule-header-btn schedule-header-prev-btn el-icon-arrow-left" @click="prevMonth"></button>
                    <span class="schedule-header-label">{{year}} 年</span><span class="schedule-header-label">{{month}} 月</span>
                    <button type="button" class="schedule-header-btn schedule-header-next-btn el-icon-d-arrow-right" @click="nextYear"></button>
                    <button type="button" class="schedule-header-btn schedule-header-next-btn el-icon-arrow-right" @click="nextMonth"></button>
                </div>
                <div class="schedule-header-content">
                    <ul class="schedule-date-table">
                        <li class="item schedule-day-name">日</li>
                        <li class="item schedule-day-name">一</li>
                        <li class="item schedule-day-name">二</li>
                        <li class="item schedule-day-name">三</li>
                        <li class="item schedule-day-name">四</li>
                        <li class="item schedule-day-name">五</li>
                        <li class="item schedule-day-name">六</li>
                    </ul>
                    <ul class="schedule-date-table">
                        <li class="item schedule-date-item" v-for="(item, dateStr) in list" :class="item.cls" :data-date="dateStr" @click="handleClick(item.flag, dateStr)">{{item.date}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        replace: true,
        props: ['scheduleOptions'],
        data: function () {
            return {
                date: new Date()
            };
        },
        computed: {
            year: function () {
                return this.date.getFullYear();
            },

            month: function () {
                return this.date.getMonth() + 1;
            },

            list: function () {
                var _this = this,
                    date = _this.date,
                    optList = _this.$props.scheduleOptions.list || [],
                    selectedYear = date.getFullYear(),
                    selectedMonth = date.getMonth(),
                    firstDay = new Date(selectedYear, selectedMonth, 1),
                    lastDay = new Date(selectedYear, selectedMonth + 1, 0),
                    now = new Date(),
                    obj = {},
                    format = function (fmt) {
                        var o = {
                            'M+': this.getMonth() + 1, //月份
                            'd+': this.getDate(), //日
                            'h+': this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
                            'H+': this.getHours(), //小时
                            'm+': this.getMinutes(), //分
                            's+': this.getSeconds(), //秒
                            'q+': Math.floor((this.getMonth() + 3) / 3), //季度
                            'S': this.getMilliseconds() //毫秒
                        };

                        var week = {
                            '0': '/u65e5',
                            '1': '/u4e00',
                            '2': '/u4e8c',
                            '3': '/u4e09',
                            '4': '/u56db',
                            '5': '/u4e94',
                            '6': '/u516d'
                        };

                        if (/(y+)/.test(fmt)) {
                            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
                        }

                        if (/(E+)/.test(fmt)) {
                            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[this.getDay() + '']);
                        }

                        for (var k in o) {
                            if (new RegExp('('+ k +')').test(fmt)) {
                                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
                            }
                        }
                        return fmt;
                    };

                //生成上个月的日期
                for (var i = firstDay.getDay(); i > 0; i--) {
                    var _date = new Date(selectedYear, selectedMonth, 1 - i, 0, 0, 0);

                    obj[format.call(_date, 'yyyy-MM-dd')] = {
                        date: _date.getDate(),
                        cls: 'prev-month',
                        value: _date.valueOf(),
                        flag: false
                    };
                }

                //生成当月的可选日期
                for (var i = firstDay.getDate(), count = lastDay.getDate() + 1; i < count; i++) {
                    var _date = new Date(selectedYear, selectedMonth, i, 0, 0, 0);

                    obj[format.call(_date, 'yyyy-MM-dd')] = {
                        date: i,
                        cls: 'available',
                        value: _date.valueOf(),
                        flag: false
                    };
                }

                //生成下个月的日期
                for (var i = 6, num = lastDay.getDay(); i > num; i--) {
                    var _date = new Date(selectedYear, selectedMonth + 1, 7 - i, 0, 0, 0);

                    obj[format.call(_date, 'yyyy-MM-dd')] = {
                        date: _date.getDate(),
                        cls: 'next-month',
                        value: _date.valueOf(),
                        flag: false
                    };
                }

                for (var i = 0, len = optList.length; i < len; i++) {
                    var curDateStr = optList[i],
                        curDate = obj[curDateStr];

                    if (curDate) {
                        //日期列表中存在这个日期
                        curDate.flag = true;

                        if (format.call(now, 'yyyy-MM-dd') == curDateStr) {
                            curDate.cls += ' today';
                        } else if (curDate.value < now.valueOf()) {
                            curDate.cls += ' history';
                        } else if (curDate.value > now.valueOf()) {
                            curDate.cls += ' future';
                        }
                    }
                }

                return obj;
            }
        },
        methods: {
            prevYear: function () {
                var oldDate = this.date;
                this.date = new Date(oldDate.getFullYear() - 1, oldDate.getMonth(), oldDate.getDate(), 0, 0, 0);
            },
            nextYear: function () {
                var oldDate = this.date;
                this.date = new Date(oldDate.getFullYear() + 1, oldDate.getMonth(), oldDate.getDate(), 0, 0, 0);
            },
            prevMonth: function () {
                var oldDate = this.date;
                this.date = new Date(oldDate.getFullYear(), oldDate.getMonth() - 1, oldDate.getDate(), 0, 0, 0);
            },
            nextMonth: function () {
                var oldDate = this.date;
                this.date = new Date(oldDate.getFullYear(), oldDate.getMonth() + 1, oldDate.getDate(), 0, 0, 0);
            },
            handleClick: function (flag, dateStr) {
                if (!flag) return;

                var _this = this;
                _this.$props.scheduleOptions.onClick && _this.$props.scheduleOptions.onClick.call(_this.$parent, dateStr, _this);
            }
        }
    };
</script>

<style>
    .schedule-panel {
        color: #48576a;
        border: 1px solid #d1dbe5;
        box-shadow: 0 2px 6px #ccc;
        background: #fff;
        border-radius: 2px;
        line-height: 20px;
        margin: 5px auto;
        width: 254px;
    }
    .schedule-panel-body-wrapper::after, .schedule-body::after {
        content: "";
        display: table;
        clear: both;
    }
    .schedule-header {
        margin: 12px;
        text-align: center;
    }
    .schedule-header-btn {
        font-size: 12px;
        color: #97a8be;
        border: 0;
        background: 0 0;
        cursor: pointer;
        outline: 0;
        margin-top: 3px;
        font-family: element-icons!important;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        vertical-align: baseline;
        display: inline-block;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .schedule-header-prev-btn {
        float: left;
    }
    .schedule-header-next-btn {
        float: right;
    }
    .schedule-header-label {
        font-size: 14px;
        padding: 0 5px;
        line-height: 22px;
        text-align: center;
    }
    .schedule-header-content {
        position: relative;
        margin: 15px;
    }
    .schedule-date-table {
        font-size: 12px;
        min-width: 224px;
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        overflow: hidden;
    }
    .schedule-date-table .item {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-weight: 400;
        float: left;
        box-sizing: border-box;
    }
    .schedule-date-table .schedule-day-name {
        color: #8391a5;
    }
    .schedule-date-table .next-month, .schedule-date-table .prev-month {
        color: #ddd;
    }
    .schedule-date-table .available:hover {
        background-color: #20a0ff!important;
        color: #fff;
    }
    .schedule-date-table .history {
        background-color: #b1b3b8!important;
        color: #fff;
        cursor: pointer;
    }
    .schedule-date-table .today {
        background-color: #ff7d18;
        color: #fff;
        cursor: pointer;
    }
    .schedule-date-table .future {
        background-color: #10c672 !important;
        color: #fff;
        cursor: pointer;
    }
</style>
