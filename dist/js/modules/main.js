webpackJsonp([0],{

/***/ 114:
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
  }), _vm._v("下游客户")]), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "1-1"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("客户管理")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-1-1",
      "route": "/main/store-account-info"
    }
  }, [_vm._v("帐号管理")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-1-2",
      "route": "/main/store-account-approve"
    }
  }, [_vm._v("帐号申请审批")])], 2)], 2), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "2"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "el-icon-message"
  }), _vm._v("导航一")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "2-1",
      "route": "/main/simple-demo"
    }
  }, [_vm._v("选项1")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "2-2",
      "route": "/main/form-demo"
    }
  }, [_vm._v("选项2")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "2-3",
      "route": "/main/list-demo"
    }
  }, [_vm._v("选项3")]), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "2-4"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("选项4")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "2-4-1"
    }
  }, [_vm._v("选项1")])], 2)], 2), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "3"
    }
  }, [_c('i', {
    staticClass: "el-icon-menu"
  }), _vm._v("导航二")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "4"
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
  }, [_vm._v("掌上快销-管理后台")]), _vm._v(" "), _c('p', {
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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d39bfd9a", module.exports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(91)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(114),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\code\\@integrate-admin-vue-spa\\src\\views\\main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d39bfd9a", Component.options)
  } else {
    hotAPI.reload("data-v-d39bfd9a", Component.options)
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

/***/ 96:
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

module.exports = {
    created: function created() {
        var _this = this;
        window.vm = _this;
    },
    data: function data() {
        return {
            frames: [{
                name: 'simple'
            }]
        };
    },
    methods: {
        handleOpen: function handleOpen(index, indexPath, item) {
            console.log(index, indexPath);
        },
        handleClose: function handleClose(index, indexPath, item) {
            console.log(index, indexPath);
        },
        handleSelect: function handleSelect(index, indexPath, item) {
            this.$router.push({
                path: item.route
            });
        }
    }
};

/***/ })

});