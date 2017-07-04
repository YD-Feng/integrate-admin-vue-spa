webpackJsonp([3],{

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(81)

	/* template */
	var __vue_template__ = __webpack_require__(82)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main\\form-demo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-74e17823", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-74e17823", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] form-demo.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    created: function () {
	        var _this = this;
	        window.vm = _this;
	    },
	    data: function () {
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
	        submitForm: function (formName) {
	            this.$refs[formName].validate(function (valid) {
	                if (valid) {
	                    this.$alert('submit!');
	                } else {
	                    console.log('error submit!!');
	                    return false;
	                }
	            });
	        },
	        resetForm: function (formName) {
	            this.$refs[formName].resetFields();
	        }
	    }
	};

/***/ }),

/***/ 82:
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
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-74e17823", module.exports)
	  }
	}

/***/ })

});