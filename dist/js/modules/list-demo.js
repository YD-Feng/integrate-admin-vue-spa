webpackJsonp([3],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-breadcrumb', [_c('el-breadcrumb-item', [_vm._v("运营系统")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("列表页示例")])], 1), _vm._v(" "), _c('div', {
    staticClass: "cm-form cm-form-inline"
  }, [_c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "inline": true,
      "model": _vm.formInline
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "审批人"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "审批人"
    },
    model: {
      value: (_vm.formInline.user),
      callback: function($$v) {
        _vm.formInline.user = $$v
      },
      expression: "formInline.user"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "活动区域"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "活动区域"
    },
    model: {
      value: (_vm.formInline.region),
      callback: function($$v) {
        _vm.formInline.region = $$v
      },
      expression: "formInline.region"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "区域一",
      "value": "shanghai"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "区域二",
      "value": "beijing"
    }
  })], 1)], 1), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": "",
      "height": "200"
    }
  }, [_c('el-table-column', {
    attrs: {
      "fixed": "left",
      "type": "selection",
      "width": "40"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "date",
      "label": "日期",
      "min-width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "姓名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "province",
      "label": "省份"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "city",
      "label": "市区"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "address",
      "label": "地址",
      "min-width": "300"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "zip",
      "label": "邮编"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "zip",
      "label": "邮编"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "zip",
      "label": "邮编"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "zip",
      "label": "邮编"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "zip",
      "label": "邮编"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "zip",
      "label": "邮编"
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
            "click": _vm.handleClick
          }
        }, [_vm._v("查看")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          }
        }, [_vm._v("编辑")])]
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
     require("vue-hot-reload-api").rerender("data-v-49a28f54", module.exports)
  }
}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(91)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(111),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main\\list-demo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list-demo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49a28f54", Component.options)
  } else {
    hotAPI.reload("data-v-49a28f54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ 98:
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
            formInline: {
                user: '',
                region: ''
            },
            tableData: [{
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
            }],
            currentPage: 1,
            pageSize: 100,
            total: 500
        };
    },
    methods: {
        onSubmit: function onSubmit() {
            console.log('submit!');
        },
        handleSizeChange: function handleSizeChange(val) {
            console.log('每页' + val + '条');
        },
        handleCurrentChange: function handleCurrentChange(val) {
            console.log('当前页:' + val);
        }
    }
};

/***/ })

});