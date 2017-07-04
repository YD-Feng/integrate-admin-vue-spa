webpackJsonp([1],{

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(75)

	/* template */
	var __vue_template__ = __webpack_require__(76)
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
	__vue_options__.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-34a6b173", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-34a6b173", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] main.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),

/***/ 75:
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

	module.exports = {
	    created: function () {
	        var _this = this;
	        window.vm = _this;
	    },
	    data: function () {
	        return {
	            frames: [{
	                name: 'simple'
	            }]
	        };
	    },
	    methods: {
	        handleOpen: function (index, indexPath, item) {
	            console.log(index, indexPath);
	        },
	        handleClose: function (index, indexPath, item) {
	            console.log(index, indexPath);
	        },
	        handleSelect: function (index, indexPath, item) {
	            this.$router.push({
	                path: item.route
	            });
	        }
	    }
	};

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page-wrap"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "auto-height",
	      rawName: "v-auto-height"
	    }],
	    staticClass: "menu-wrap",
	    attrs: {
	      "data-del-height": "84"
	    }
	  }, [_c('el-menu', {
	    attrs: {
	      "default-active": "1-1",
	      "theme": "dark"
	    },
	    on: {
	      "open": _vm.handleOpen,
	      "close": _vm.handleClose,
	      "select": _vm.handleSelect
	    }
	  }, [_c('el-submenu', {
	    attrs: {
	      "index": "1"
	    }
	  }, [_c('template', {
	    slot: "title"
	  }, [_c('i', {
	    staticClass: "el-icon-message"
	  }), _vm._v("导航一")]), _vm._v(" "), _c('el-menu-item', {
	    attrs: {
	      "index": "1-1",
	      "route": "/main/simple-demo"
	    }
	  }, [_vm._v("选项1")]), _vm._v(" "), _c('el-menu-item', {
	    attrs: {
	      "index": "1-2",
	      "route": "/main/form-demo"
	    }
	  }, [_vm._v("选项2")]), _vm._v(" "), _c('el-menu-item', {
	    attrs: {
	      "index": "1-3",
	      "route": "/main/list-demo"
	    }
	  }, [_vm._v("选项3")]), _vm._v(" "), _c('el-submenu', {
	    attrs: {
	      "index": "1-4"
	    }
	  }, [_c('template', {
	    slot: "title"
	  }, [_vm._v("选项4")]), _vm._v(" "), _c('el-menu-item', {
	    attrs: {
	      "index": "1-4-1"
	    }
	  }, [_vm._v("选项1")])], 2)], 2), _vm._v(" "), _c('el-menu-item', {
	    attrs: {
	      "index": "2"
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-menu"
	  }), _vm._v("导航二")]), _vm._v(" "), _c('el-menu-item', {
	    attrs: {
	      "index": "3"
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-setting"
	  }), _vm._v("导航三")])], 1)], 1), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "auto-height",
	      rawName: "v-auto-height"
	    }],
	    staticClass: "cont-wrap",
	    attrs: {
	      "data-del-height": "84"
	    }
	  }, [_c('router-view')], 1), _vm._v(" "), _vm._m(1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header"
	  }, [_c('p', {
	    staticClass: "title"
	  }, [_vm._v("运营系统")]), _vm._v(" "), _c('p', {
	    staticClass: "msg"
	  }, [_vm._v("\n            欢迎你回来，"), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("admin")]), _vm._v("  【"), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("注销")]), _vm._v("】\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "footer"
	  }, [_vm._v("2017 © Powered By "), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v("技术研发部")])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-34a6b173", module.exports)
	  }
	}

/***/ })

});