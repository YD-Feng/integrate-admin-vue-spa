webpackJsonp([4],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-breadcrumb', [_c('el-breadcrumb-item', [_vm._v("运营系统")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("表单示例")])], 1), _vm._v(" "), _c('div', {
    staticClass: "cm-form"
  }, [_c('el-form', {
    ref: "ruleForm",
    staticClass: "demo-ruleForm",
    attrs: {
      "model": _vm.ruleForm,
      "rules": _vm.rules,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "活动名称",
      "prop": "name"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.ruleForm.name),
      callback: function($$v) {
        _vm.ruleForm.name = $$v
      },
      expression: "ruleForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "活动区域",
      "prop": "region"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择活动区域"
    },
    model: {
      value: (_vm.ruleForm.region),
      callback: function($$v) {
        _vm.ruleForm.region = $$v
      },
      expression: "ruleForm.region"
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
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "活动时间",
      "required": ""
    }
  }, [_c('el-col', {
    attrs: {
      "span": 11
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "date1"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.ruleForm.date1),
      callback: function($$v) {
        _vm.ruleForm.date1 = $$v
      },
      expression: "ruleForm.date1"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "line",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "span": 2
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 11
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "date2"
    }
  }, [_c('el-time-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "fixed-time",
      "placeholder": "选择时间"
    },
    model: {
      value: (_vm.ruleForm.date2),
      callback: function($$v) {
        _vm.ruleForm.date2 = $$v
      },
      expression: "ruleForm.date2"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "即时配送",
      "prop": "delivery"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": ""
    },
    model: {
      value: (_vm.ruleForm.delivery),
      callback: function($$v) {
        _vm.ruleForm.delivery = $$v
      },
      expression: "ruleForm.delivery"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "活动性质",
      "prop": "type"
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.ruleForm.type),
      callback: function($$v) {
        _vm.ruleForm.type = $$v
      },
      expression: "ruleForm.type"
    }
  }, [_c('el-checkbox', {
    attrs: {
      "label": "美食/餐厅线上活动",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "地推活动",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "线下主题活动",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "单纯品牌曝光",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "特殊资源",
      "prop": "resource"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.ruleForm.resource),
      callback: function($$v) {
        _vm.ruleForm.resource = $$v
      },
      expression: "ruleForm.resource"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "1"
    }
  }, [_vm._v("线上品牌商赞助")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "2"
    }
  }, [_vm._v("线下场地免费")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "活动形式",
      "prop": "desc"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "autosize": {
        minRows: 4,
        maxRows: 8
      }
    },
    model: {
      value: (_vm.ruleForm.desc),
      callback: function($$v) {
        _vm.ruleForm.desc = $$v
      },
      expression: "ruleForm.desc"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('ruleForm')
      }
    }
  }, [_vm._v("立即创建")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.resetForm('ruleForm')
      }
    }
  }, [_vm._v("重置")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f5fa6f0", module.exports)
  }
}

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(91)(
  /* script */
  __webpack_require__(97),
  /* template */
  __webpack_require__(110),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main\\form-demo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form-demo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f5fa6f0", Component.options)
  } else {
    hotAPI.reload("data-v-2f5fa6f0", Component.options)
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

/***/ 97:
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

module.exports = {
    created: function created() {
        var _this = this;
        window.vm = _this;
    },
    data: function data() {
        return {
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
                type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
                resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
                desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm: function submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    this.$alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm: function resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};

/***/ })

});