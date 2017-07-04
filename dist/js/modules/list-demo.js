webpackJsonp([4],{

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(84)

	/* template */
	var __vue_template__ = __webpack_require__(85)
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
	__vue_options__.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main\\list-demo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-20b08989", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-20b08989", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] list-demo.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),

/***/ 84:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ }),

/***/ 85:
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
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-20b08989", module.exports)
	  }
	}

/***/ })

});