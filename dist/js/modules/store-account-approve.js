webpackJsonp([8],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(91)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(122),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main\\store-account-approve.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] store-account-approve.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c6af6036", Component.options)
  } else {
    hotAPI.reload("data-v-c6af6036", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    created: function created() {
        var _this = this;
        window.vm = _this;
    },
    data: function data() {
        return {
            pageType: 1,
            curAccountId: ''
        };
    },
    components: {
        accountSearchList: __webpack_require__(130),
        accountApprove: __webpack_require__(120)
    }
};

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(128)
}
var Component = __webpack_require__(91)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(127),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main\\store-account-approve\\account-approve.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] account-approve.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d1c72fa", Component.options)
  } else {
    hotAPI.reload("data-v-0d1c72fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-breadcrumb', [_c('el-breadcrumb-item', [_vm._v("下游客户")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("客户管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("帐号申请列表")]), _vm._v(" "), (_vm.pageType == 2) ? _c('el-breadcrumb-item', [_vm._v("申请审批")]) : _vm._e()], 1), _vm._v(" "), _c('account-search-list', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pageType == 1),
      expression: "pageType == 1"
    }]
  }), _vm._v(" "), _c('account-approve', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pageType == 2),
      expression: "pageType == 2"
    }],
    attrs: {
      "custom-id": _vm.curAccountId
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c6af6036", module.exports)
  }
}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    replace: true,
    props: ['customId'],
    data: function data() {
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
        };
    },
    methods: {
        goBack: function goBack() {
            this.$parent.pageType = 1;
        },
        selectCustom: function selectCustom() {
            this.dialogVisible = true;
        },
        submit: function submit() {
            console.info(this);
        }
    },
    components: {
        customSearchList: __webpack_require__(133)
    }
};

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cm-inner-page"
  }, [_c('div', {
    staticClass: "top-btn-wrap"
  }, [_c('el-button', {
    attrs: {
      "type": "success",
      "icon": "d-arrow-left"
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("返回")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-wrap"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("选择设置贸易条款的方式")]), _vm._v(" "), _c('div', {
    staticClass: "pt5px pb15px"
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "绑定现有客户",
      "disabled": ""
    },
    model: {
      value: (_vm.form.is_bind_existed),
      callback: function($$v) {
        _vm.form.is_bind_existed = $$v
      },
      expression: "form.is_bind_existed"
    }
  }, [_vm._v(" 绑定现有客户")])], 1), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("选择绑定客户")]), _vm._v(" "), _c('div', {
    staticClass: "cm-form-inline"
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.form,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "customer_title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "400px"
    },
    model: {
      value: (_vm.form.customer_title),
      callback: function($$v) {
        _vm.form.customer_title = $$v
      },
      expression: "form.customer_title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "-25px"
    }
  }, [_c('el-button', {
    attrs: {
      "icon": "plus"
    },
    on: {
      "click": _vm.selectCustom
    }
  }, [_vm._v("选择客户")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("贸易条款设置")]), _vm._v(" "), _c('div', {
    staticClass: "cm-form-inline"
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.form,
      "rules": _vm.rules,
      "label-position": "top"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "价格套",
      "prop": "price_id"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.form.price_id),
      callback: function($$v) {
        _vm.form.price_id = $$v
      },
      expression: "form.price_id"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "全部",
      "value": ""
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "所属分公司",
      "prop": "org_id"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.form.org_id),
      callback: function($$v) {
        _vm.form.org_id = $$v
      },
      expression: "form.org_id"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "全部",
      "value": ""
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "配送仓库",
      "prop": "inv_id"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.form.inv_id),
      callback: function($$v) {
        _vm.form.inv_id = $$v
      },
      expression: "form.inv_id"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "全部",
      "value": ""
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "pt15px pb15px"
  }, [_c('el-button', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("取消")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "选择客户",
      "size": "large",
      "max-height": "200",
      "visible": _vm.dialogVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogVisible = $event
      }
    }
  }, [_c('custom-search-list')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d1c72fa", module.exports)
  }
}

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("ca42cb64", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1c72fa\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./account-approve.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1c72fa\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./account-approve.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _ = __webpack_require__(29);

var formDefault = {
    date_range: '',
    start: '',
    end: '',
    recommend_by: '',
    title: '',
    tel: ''
};

module.exports = {
    replace: true,
    data: function data() {
        return {
            form: _.extend({}, formDefault),
            list: [{
                "id": 1681,
                "agent_code": "zskx_fs",
                "store_id": {
                    "title": "小zzz",
                    "contacts": null,
                    "tel": "13138794666",
                    "province": "广东",
                    "city": "佛山",
                    "county": "禅城区",
                    "district": "禅城乡镇",
                    "address": "龙啸大明",
                    "recommend_by": "",
                    "store_id": 1677
                },
                "status": "submit",
                "created_by": 0,
                "creation_date": "2017-03-30T11:52:47.000Z",
                "dealer": null,
                "deal_date": null,
                "address": "龙啸大明",
                "recommend_by": "",
                "title": "小zzz",
                "tel": "13138794666"
            }, {
                "id": 1676,
                "agent_code": "zskx_fs",
                "store_id": {
                    "title": "楚明boy测试",
                    "contacts": null,
                    "tel": "13970495411",
                    "province": "香港",
                    "city": "元朗区",
                    "county": "城区",
                    "district": "",
                    "address": "中山小道233号",
                    "recommend_by": "刘燕燕3",
                    "store_id": 1578
                },
                "status": "submit",
                "created_by": 0,
                "creation_date": "2017-02-17T02:20:23.000Z",
                "dealer": null,
                "deal_date": null,
                "address": "中山小道233号",
                "recommend_by": "刘燕燕3",
                "title": "楚明boy测试",
                "tel": "13970495411"
            }],
            currentPage: 1,
            pageSize: 100,
            total: 500
        };
    },
    methods: {
        search: function search() {},
        reset: function reset() {
            this.form = _.extend({}, formDefault);
        },
        handleClick: function handleClick(row) {
            this.$parent.curCustomId = row.customer_id;
            this.$parent.pageType = 2;
        }
    }
};

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(91)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(131),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main\\store-account-approve\\account-search-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] account-search-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a309ed9", Component.options)
  } else {
    hotAPI.reload("data-v-1a309ed9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "cm-form-inline"
  }, [_c('el-form', {
    staticClass: "search-form",
    attrs: {
      "inline": true,
      "model": _vm.form,
      "label-position": "top"
    }
  }, [_c('el-form-item', {
    staticClass: "cm-date-range",
    attrs: {
      "label": "申请日期",
      "prop": "date_range"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "daterange",
      "format": "yyyy-MM-dd"
    },
    model: {
      value: (_vm.form.date_range),
      callback: function($$v) {
        _vm.form.date_range = $$v
      },
      expression: "form.date_range"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "推荐人",
      "prop": "recommend_by"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.form.recommend_by),
      callback: function($$v) {
        _vm.form.recommend_by = $$v
      },
      expression: "form.recommend_by"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商店名称",
      "prop": "title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.form.title),
      callback: function($$v) {
        _vm.form.title = $$v
      },
      expression: "form.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系电话",
      "prop": "tel"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.form.tel),
      callback: function($$v) {
        _vm.form.tel = $$v
      },
      expression: "form.tel"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "　"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("重置")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.list,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "creation_date",
      "label": "申请日期",
      "min-width": "190"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "商店名称",
      "min-width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "tel",
      "label": "联系电话",
      "min-width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "地址",
      "min-width": "300"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                " + _vm._s(scope.row.store_id.province + ' ' + scope.row.store_id.city + ' ' + scope.row.store_id.county + ' ' + scope.row.store_id.address) + "\n            ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "recommend_by",
      "label": "推荐人",
      "min-width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "fixed": "right",
      "label": "操作",
      "align": "center",
      "width": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleClick(scope.row)
            }
          }
        }, [_vm._v("审核")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cm-pagination-wrap"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [100, 200, 300, 400],
      "page-size": _vm.pageSize,
      "total": _vm.total,
      "layout": "total, sizes, prev, pager, next, jumper"
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a309ed9", module.exports)
  }
}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _ = __webpack_require__(29);

var formDefault = {
    title: '',
    customer_code: '',
    local_erp_code: '',
    customer_org: '',
    customer_type: ''
};

module.exports = {
    replace: true,
    data: function data() {
        return {
            form: _.extend({}, formDefault),
            list: [{
                "customer_id": 807500197,
                "cs_customer_id": "1.2",
                "agent_code": "zskx_fs",
                "code": "1.2.018",
                "local_erp_code": "null",
                "title": "禅城区起旺便利店",
                "kind": "小食杂店-ST",
                "oper_id": 0,
                "price_set_id": {
                    "title": "零售价1",
                    "price_set_id": 1854
                },
                "org_id": {
                    "title": "掌上快销/掌上快销总部",
                    "org_id": 793
                },
                "inv_id": {
                    "title": "掌上快销总部仓",
                    "inv_id": 2908
                },
                "employee_id": {
                    "employee_id": 0,
                    "employee_name": ""
                },
                "status": "enable",
                "contacts": "方笑华",
                "mobile": "83210327",
                "tel": "null",
                "email": "null",
                "address": "送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                "coordinate": "113.16375138666,22.957660059217",
                "is_need_find_coor": 0,
                "receive_contacts": "0",
                "receive_address": "null",
                "receive_tel": "null",
                "remark": "null",
                "seq": 500,
                "created_by": 283796,
                "creation_date": "2016-06-21T07:43:44.000Z",
                "last_updated_by": 20867,
                "last_update_date": "2016-08-09T08:28:23.000Z",
                "is_bind_store": 0,
                "rel_id": 9532,
                "invited_code": "807500197",
                "invited_contacts": "方笑华",
                "invited_mobile": "83210327",
                "invited_email": "null",
                "bind_date": "2016-12-22T07:24:33.000Z",
                "store_id": null,
                "store_title": null,
                "store_tel": null,
                "recommend_by": null
            }, {
                "customer_id": 807500197,
                "cs_customer_id": "1.2",
                "agent_code": "zskx_fs",
                "code": "1.2.018",
                "local_erp_code": "null",
                "title": "禅城区起旺便利店",
                "kind": "小食杂店-ST",
                "oper_id": 0,
                "price_set_id": {
                    "title": "零售价1",
                    "price_set_id": 1854
                },
                "org_id": {
                    "title": "掌上快销/掌上快销总部",
                    "org_id": 793
                },
                "inv_id": {
                    "title": "掌上快销总部仓",
                    "inv_id": 2908
                },
                "employee_id": {
                    "employee_id": 0,
                    "employee_name": ""
                },
                "status": "enable",
                "contacts": "方笑华",
                "mobile": "83210327",
                "tel": "null",
                "email": "null",
                "address": "送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                "coordinate": "113.16375138666,22.957660059217",
                "is_need_find_coor": 0,
                "receive_contacts": "0",
                "receive_address": "null",
                "receive_tel": "null",
                "remark": "null",
                "seq": 500,
                "created_by": 283796,
                "creation_date": "2016-06-21T07:43:44.000Z",
                "last_updated_by": 20867,
                "last_update_date": "2016-08-09T08:28:23.000Z",
                "is_bind_store": 0,
                "rel_id": 9532,
                "invited_code": "807500197",
                "invited_contacts": "方笑华",
                "invited_mobile": "83210327",
                "invited_email": "null",
                "bind_date": "2016-12-22T07:24:33.000Z",
                "store_id": null,
                "store_title": null,
                "store_tel": null,
                "recommend_by": null
            }, {
                "customer_id": 807500197,
                "cs_customer_id": "1.2",
                "agent_code": "zskx_fs",
                "code": "1.2.018",
                "local_erp_code": "null",
                "title": "禅城区起旺便利店",
                "kind": "小食杂店-ST",
                "oper_id": 0,
                "price_set_id": {
                    "title": "零售价1",
                    "price_set_id": 1854
                },
                "org_id": {
                    "title": "掌上快销/掌上快销总部",
                    "org_id": 793
                },
                "inv_id": {
                    "title": "掌上快销总部仓",
                    "inv_id": 2908
                },
                "employee_id": {
                    "employee_id": 0,
                    "employee_name": ""
                },
                "status": "enable",
                "contacts": "方笑华",
                "mobile": "83210327",
                "tel": "null",
                "email": "null",
                "address": "送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                "coordinate": "113.16375138666,22.957660059217",
                "is_need_find_coor": 0,
                "receive_contacts": "0",
                "receive_address": "null",
                "receive_tel": "null",
                "remark": "null",
                "seq": 500,
                "created_by": 283796,
                "creation_date": "2016-06-21T07:43:44.000Z",
                "last_updated_by": 20867,
                "last_update_date": "2016-08-09T08:28:23.000Z",
                "is_bind_store": 0,
                "rel_id": 9532,
                "invited_code": "807500197",
                "invited_contacts": "方笑华",
                "invited_mobile": "83210327",
                "invited_email": "null",
                "bind_date": "2016-12-22T07:24:33.000Z",
                "store_id": null,
                "store_title": null,
                "store_tel": null,
                "recommend_by": null
            }, {
                "customer_id": 807500197,
                "cs_customer_id": "1.2",
                "agent_code": "zskx_fs",
                "code": "1.2.018",
                "local_erp_code": "null",
                "title": "禅城区起旺便利店",
                "kind": "小食杂店-ST",
                "oper_id": 0,
                "price_set_id": {
                    "title": "零售价1",
                    "price_set_id": 1854
                },
                "org_id": {
                    "title": "掌上快销/掌上快销总部",
                    "org_id": 793
                },
                "inv_id": {
                    "title": "掌上快销总部仓",
                    "inv_id": 2908
                },
                "employee_id": {
                    "employee_id": 0,
                    "employee_name": ""
                },
                "status": "enable",
                "contacts": "方笑华",
                "mobile": "83210327",
                "tel": "null",
                "email": "null",
                "address": "送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                "coordinate": "113.16375138666,22.957660059217",
                "is_need_find_coor": 0,
                "receive_contacts": "0",
                "receive_address": "null",
                "receive_tel": "null",
                "remark": "null",
                "seq": 500,
                "created_by": 283796,
                "creation_date": "2016-06-21T07:43:44.000Z",
                "last_updated_by": 20867,
                "last_update_date": "2016-08-09T08:28:23.000Z",
                "is_bind_store": 0,
                "rel_id": 9532,
                "invited_code": "807500197",
                "invited_contacts": "方笑华",
                "invited_mobile": "83210327",
                "invited_email": "null",
                "bind_date": "2016-12-22T07:24:33.000Z",
                "store_id": null,
                "store_title": null,
                "store_tel": null,
                "recommend_by": null
            }, {
                "customer_id": 807500197,
                "cs_customer_id": "1.2",
                "agent_code": "zskx_fs",
                "code": "1.2.018",
                "local_erp_code": "null",
                "title": "禅城区起旺便利店",
                "kind": "小食杂店-ST",
                "oper_id": 0,
                "price_set_id": {
                    "title": "零售价1",
                    "price_set_id": 1854
                },
                "org_id": {
                    "title": "掌上快销/掌上快销总部",
                    "org_id": 793
                },
                "inv_id": {
                    "title": "掌上快销总部仓",
                    "inv_id": 2908
                },
                "employee_id": {
                    "employee_id": 0,
                    "employee_name": ""
                },
                "status": "enable",
                "contacts": "方笑华",
                "mobile": "83210327",
                "tel": "null",
                "email": "null",
                "address": "送货即收!!佛山市禅城区教子村南便大街7号（易购超市旁进入）",
                "coordinate": "113.16375138666,22.957660059217",
                "is_need_find_coor": 0,
                "receive_contacts": "0",
                "receive_address": "null",
                "receive_tel": "null",
                "remark": "null",
                "seq": 500,
                "created_by": 283796,
                "creation_date": "2016-06-21T07:43:44.000Z",
                "last_updated_by": 20867,
                "last_update_date": "2016-08-09T08:28:23.000Z",
                "is_bind_store": 0,
                "rel_id": 9532,
                "invited_code": "807500197",
                "invited_contacts": "方笑华",
                "invited_mobile": "83210327",
                "invited_email": "null",
                "bind_date": "2016-12-22T07:24:33.000Z",
                "store_id": null,
                "store_title": null,
                "store_tel": null,
                "recommend_by": null
            }],
            currentPage: 1,
            pageSize: 100,
            total: 500
        };
    },
    methods: {
        search: function search() {},
        reset: function reset() {
            this.form = _.extend({}, formDefault);
        },
        handleClick: function handleClick(row) {
            //由于用 dialog 组件进行嵌套了，所以需要访问祖父级组件,才能顺利操作
            var parent = this.$parent.$parent;
            parent.form.customer_title = row.title;
            parent.form.customer_id = row.customer_id;
            parent.dialogVisible = false;
        }
    }
};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(91)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(134),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main\\store-account-approve\\custom-search-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] custom-search-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5d76e3e", Component.options)
  } else {
    hotAPI.reload("data-v-d5d76e3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dialog-page-wrap"
  }, [_c('div', {
    staticClass: "cm-form-inline"
  }, [_c('el-form', {
    staticClass: "search-form",
    attrs: {
      "inline": true,
      "model": _vm.form,
      "label-position": "top"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "客户名称",
      "prop": "title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.form.title),
      callback: function($$v) {
        _vm.form.title = $$v
      },
      expression: "form.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "客户编码",
      "prop": "customer_code"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.form.customer_code),
      callback: function($$v) {
        _vm.form.customer_code = $$v
      },
      expression: "form.customer_code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "ERP编码",
      "prop": "local_erp_code"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.form.local_erp_code),
      callback: function($$v) {
        _vm.form.local_erp_code = $$v
      },
      expression: "form.local_erp_code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "所属分公司",
      "prop": "customer_org"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.form.customer_org),
      callback: function($$v) {
        _vm.form.customer_org = $$v
      },
      expression: "form.customer_org"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "全部",
      "value": ""
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "客户类型",
      "prop": "customer_type"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.form.customer_type),
      callback: function($$v) {
        _vm.form.customer_type = $$v
      },
      expression: "form.customer_type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "全部",
      "value": ""
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "　"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("重置")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.list,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "code",
      "label": "客户编码",
      "min-width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "客户名称",
      "min-width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "local_erp_code",
      "label": "本地ERP编码",
      "min-width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "kind",
      "label": "客户类型",
      "min-width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "org_id.title",
      "label": "所属分公司",
      "min-width": "220"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "fixed": "right",
      "label": "操作",
      "align": "center",
      "width": "120"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleClick(scope.row)
            }
          }
        }, [_vm._v("选择")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cm-pagination-wrap"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [100, 200, 300, 400],
      "page-size": _vm.pageSize,
      "total": _vm.total,
      "layout": "total, sizes, prev, pager, next, jumper"
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d5d76e3e", module.exports)
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(94)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});