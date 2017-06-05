webpackJsonp([2],{

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(77)

	/* template */
	var __vue_template__ = __webpack_require__(78)
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
	__vue_options__.__file = "E:\\myProject\\integrate-admin-vue\\src\\views\\main\\simple-demo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e720716e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e720716e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] simple-demo.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),

/***/ 77:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	            radio: '1',
	            checkList: [],
	            input: '123',
	            options: [{
	                value: '选项1',
	                label: '黄金糕'
	            }, {
	                value: '选项2',
	                label: '双皮奶'
	            }, {
	                value: '选项3',
	                label: '蚵仔煎'
	            }, {
	                value: '选项4',
	                label: '龙须面'
	            }, {
	                value: '选项5',
	                label: '北京烤鸭'
	            }],
	            value: '',
	            valueList: [],
	            cascaderOptions: [{
	                value: 'zhinan',
	                label: '指南',
	                children: [{
	                    value: 'shejiyuanze',
	                    label: '设计原则',
	                    children: [{
	                        value: 'yizhi',
	                        label: '一致'
	                    }, {
	                        value: 'fankui',
	                        label: '反馈'
	                    }, {
	                        value: 'xiaolv',
	                        label: '效率'
	                    }, {
	                        value: 'kekong',
	                        label: '可控'
	                    }]
	                }, {
	                    value: 'daohang',
	                    label: '导航',
	                    children: [{
	                        value: 'cexiangdaohang',
	                        label: '侧向导航'
	                    }, {
	                        value: 'dingbudaohang',
	                        label: '顶部导航'
	                    }]
	                }]
	            }, {
	                value: 'zujian',
	                label: '组件',
	                children: [{
	                    value: 'basic',
	                    label: 'Basic',
	                    children: [{
	                        value: 'layout',
	                        label: 'Layout 布局'
	                    }, {
	                        value: 'color',
	                        label: 'Color 色彩'
	                    }, {
	                        value: 'typography',
	                        label: 'Typography 字体'
	                    }, {
	                        value: 'icon',
	                        label: 'Icon 图标'
	                    }, {
	                        value: 'button',
	                        label: 'Button 按钮'
	                    }]
	                }, {
	                    value: 'form',
	                    label: 'Form',
	                    children: [{
	                        value: 'radio',
	                        label: 'Radio 单选框'
	                    }, {
	                        value: 'checkbox',
	                        label: 'Checkbox 多选框'
	                    }, {
	                        value: 'input',
	                        label: 'Input 输入框'
	                    }, {
	                        value: 'input-number',
	                        label: 'InputNumber 计数器'
	                    }, {
	                        value: 'select',
	                        label: 'Select 选择器'
	                    }, {
	                        value: 'cascader',
	                        label: 'Cascader 级联选择器'
	                    }, {
	                        value: 'switch',
	                        label: 'Switch 开关'
	                    }, {
	                        value: 'slider',
	                        label: 'Slider 滑块'
	                    }, {
	                        value: 'time-picker',
	                        label: 'TimePicker 时间选择器'
	                    }, {
	                        value: 'date-picker',
	                        label: 'DatePicker 日期选择器'
	                    }, {
	                        value: 'datetime-picker',
	                        label: 'DateTimePicker 日期时间选择器'
	                    }, {
	                        value: 'upload',
	                        label: 'Upload 上传'
	                    }, {
	                        value: 'rate',
	                        label: 'Rate 评分'
	                    }, {
	                        value: 'form',
	                        label: 'Form 表单'
	                    }]
	                }, {
	                    value: 'data',
	                    label: 'Data',
	                    children: [{
	                        value: 'table',
	                        label: 'Table 表格'
	                    }, {
	                        value: 'tag',
	                        label: 'Tag 标签'
	                    }, {
	                        value: 'progress',
	                        label: 'Progress 进度条'
	                    }, {
	                        value: 'tree',
	                        label: 'Tree 树形控件'
	                    }, {
	                        value: 'pagination',
	                        label: 'Pagination 分页'
	                    }, {
	                        value: 'badge',
	                        label: 'Badge 标记'
	                    }]
	                }, {
	                    value: 'notice',
	                    label: 'Notice',
	                    children: [{
	                        value: 'alert',
	                        label: 'Alert 警告'
	                    }, {
	                        value: 'loading',
	                        label: 'Loading 加载'
	                    }, {
	                        value: 'message',
	                        label: 'Message 消息提示'
	                    }, {
	                        value: 'message-box',
	                        label: 'MessageBox 弹框'
	                    }, {
	                        value: 'notification',
	                        label: 'Notification 通知'
	                    }]
	                }, {
	                    value: 'navigation',
	                    label: 'Navigation',
	                    children: [{
	                        value: 'menu',
	                        label: 'NavMenu 导航菜单'
	                    }, {
	                        value: 'tabs',
	                        label: 'Tabs 标签页'
	                    }, {
	                        value: 'breadcrumb',
	                        label: 'Breadcrumb 面包屑'
	                    }, {
	                        value: 'dropdown',
	                        label: 'Dropdown 下拉菜单'
	                    }, {
	                        value: 'steps',
	                        label: 'Steps 步骤条'
	                    }]
	                }, {
	                    value: 'others',
	                    label: 'Others',
	                    children: [{
	                        value: 'dialog',
	                        label: 'Dialog 对话框'
	                    }, {
	                        value: 'tooltip',
	                        label: 'Tooltip 文字提示'
	                    }, {
	                        value: 'popover',
	                        label: 'Popover 弹出框'
	                    }, {
	                        value: 'card',
	                        label: 'Card 卡片'
	                    }, {
	                        value: 'carousel',
	                        label: 'Carousel 走马灯'
	                    }, {
	                        value: 'collapse',
	                        label: 'Collapse 折叠面板'
	                    }]
	                }]
	            }, {
	                value: 'ziyuan',
	                label: '资源',
	                children: [{
	                    value: 'axure',
	                    label: 'Axure Components'
	                }, {
	                    value: 'sketch',
	                    label: 'Sketch Templates'
	                }, {
	                    value: 'jiaohu',
	                    label: '组件交互文档'
	                }]
	            }],
	            selectedOptions: [],
	            textarea: '12312123',
	            select: '1',
	            inputGroup: 'aa',
	            switchValue: '',
	            sliderValue: 50,
	            dateValue: '',
	            dateTimeValue: '',
	            dialogImageUrl: '',
	            dialogVisible: false
	        };
	    },
	    methods: {
	        formatTooltip: function (val) {
	            return val / 100;
	        },
	        beforeUpload: function (file) {
	            let isJPG = file.type === 'image/jpeg',
	                isLt2M = file.size / 1024 / 1024 < 2;

	            if (!isJPG) {
	                this.$message.error('上传头像图片只能是 JPG 格式!');
	            }
	            if (!isLt2M) {
	                this.$message.error('上传头像图片大小不能超过 2MB!');
	            }
	            return isJPG && isLt2M;
	        },
	        handleUploadSuccess: function (res, file) {
	            console.log('图片上传成功');
	        },
	        handleUploadError: function (res, file) {
	            console.log('图片上传失败');
	        },
	        handleRemove: function (file, fileList) {
	            console.log(file, fileList);
	        },
	        handlePictureCardPreview: function (file) {
	            this.dialogImageUrl = file.url;
	            this.dialogVisible = true;
	        }
	    }
	};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('el-breadcrumb', [_c('el-breadcrumb-item', [_vm._v("运营系统")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("常规组件示例")])], 1), _vm._v(" "), _c('el-radio', {
	    staticClass: "radio",
	    attrs: {
	      "label": "1"
	    },
	    model: {
	      value: (_vm.radio),
	      callback: function($$v) {
	        _vm.radio = $$v
	      },
	      expression: "radio"
	    }
	  }, [_vm._v("备选项")]), _vm._v(" "), _c('el-radio', {
	    staticClass: "radio",
	    attrs: {
	      "label": "2"
	    },
	    model: {
	      value: (_vm.radio),
	      callback: function($$v) {
	        _vm.radio = $$v
	      },
	      expression: "radio"
	    }
	  }, [_vm._v("备选项")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-checkbox-group', {
	    model: {
	      value: (_vm.checkList),
	      callback: function($$v) {
	        _vm.checkList = $$v
	      },
	      expression: "checkList"
	    }
	  }, [_c('el-checkbox', {
	    attrs: {
	      "label": "a"
	    }
	  }, [_vm._v("选项A")]), _vm._v(" "), _c('el-checkbox', {
	    attrs: {
	      "label": "b"
	    }
	  }, [_vm._v("选项B")])], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-input', {
	    attrs: {
	      "placeholder": "请输入内容",
	      "icon": "search",
	      "size": "small"
	    },
	    model: {
	      value: (_vm.input),
	      callback: function($$v) {
	        _vm.input = $$v
	      },
	      expression: "input"
	    }
	  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-select', {
	    attrs: {
	      "placeholder": "请选择"
	    },
	    model: {
	      value: (_vm.value),
	      callback: function($$v) {
	        _vm.value = $$v
	      },
	      expression: "value"
	    }
	  }, _vm._l((_vm.options), function(item) {
	    return _c('el-option', {
	      key: item.value,
	      attrs: {
	        "label": item.label,
	        "value": item.value
	      }
	    })
	  })), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-select', {
	    attrs: {
	      "multiple": "",
	      "size": "small",
	      "placeholder": "请选择"
	    },
	    model: {
	      value: (_vm.valueList),
	      callback: function($$v) {
	        _vm.valueList = $$v
	      },
	      expression: "valueList"
	    }
	  }, _vm._l((_vm.options), function(item) {
	    return _c('el-option', {
	      key: item.value,
	      attrs: {
	        "label": item.label,
	        "value": item.value
	      }
	    })
	  })), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-cascader', {
	    attrs: {
	      "expand-trigger": "hover",
	      "show-all-levels": false,
	      "options": _vm.cascaderOptions
	    },
	    on: {
	      "change": _vm.handleChange
	    },
	    model: {
	      value: (_vm.selectedOptions),
	      callback: function($$v) {
	        _vm.selectedOptions = $$v
	      },
	      expression: "selectedOptions"
	    }
	  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-input', {
	    attrs: {
	      "type": "textarea",
	      "autosize": {
	        minRows: 2,
	        maxRows: 4
	      },
	      "placeholder": "请输入内容"
	    },
	    model: {
	      value: (_vm.textarea),
	      callback: function($$v) {
	        _vm.textarea = $$v
	      },
	      expression: "textarea"
	    }
	  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-input', {
	    attrs: {
	      "placeholder": "请输入内容"
	    },
	    model: {
	      value: (_vm.inputGroup),
	      callback: function($$v) {
	        _vm.inputGroup = $$v
	      },
	      expression: "inputGroup"
	    }
	  }, [_c('el-select', {
	    attrs: {
	      "placeholder": "请选择"
	    },
	    slot: "prepend",
	    model: {
	      value: (_vm.select),
	      callback: function($$v) {
	        _vm.select = $$v
	      },
	      expression: "select"
	    }
	  }, [_c('el-option', {
	    attrs: {
	      "label": "餐厅名",
	      "value": "1"
	    }
	  }), _vm._v(" "), _c('el-option', {
	    attrs: {
	      "label": "订单号",
	      "value": "2"
	    }
	  }), _vm._v(" "), _c('el-option', {
	    attrs: {
	      "label": "用户电话",
	      "value": "3"
	    }
	  })], 1), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "icon": "search"
	    },
	    slot: "append"
	  })], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-switch', {
	    attrs: {
	      "on-color": "#20a0ff",
	      "off-color": "#bfcbd9",
	      "on-text": "",
	      "off-text": "",
	      "on-value": "100",
	      "off-value": "0"
	    },
	    model: {
	      value: (_vm.switchValue),
	      callback: function($$v) {
	        _vm.switchValue = $$v
	      },
	      expression: "switchValue"
	    }
	  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "width": "200px"
	    }
	  }, [_c('el-slider', {
	    attrs: {
	      "format-tooltip": _vm.formatTooltip
	    },
	    model: {
	      value: (_vm.sliderValue),
	      callback: function($$v) {
	        _vm.sliderValue = $$v
	      },
	      expression: "sliderValue"
	    }
	  })], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-date-picker', {
	    attrs: {
	      "type": "daterange",
	      "format": "yyyy-MM-dd",
	      "placeholder": "选择日期范围"
	    },
	    model: {
	      value: (_vm.dateValue),
	      callback: function($$v) {
	        _vm.dateValue = $$v
	      },
	      expression: "dateValue"
	    }
	  }), _vm._v(" "), _c('el-date-picker', {
	    attrs: {
	      "type": "datetimerange",
	      "format": "yyyy-MM-dd HH:mm:ss",
	      "placeholder": "选择时间范围"
	    },
	    model: {
	      value: (_vm.dateTimeValue),
	      callback: function($$v) {
	        _vm.dateTimeValue = $$v
	      },
	      expression: "dateTimeValue"
	    }
	  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-upload', {
	    attrs: {
	      "action": "https://jsonplaceholder.typicode.com/posts/",
	      "list-type": "picture-card",
	      "on-preview": _vm.handlePictureCardPreview,
	      "on-remove": _vm.handleRemove,
	      "before-upload": _vm.beforeUpload,
	      "on-success": _vm.handleUploadSuccess,
	      "on-error": _vm.handleUploadError
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-plus"
	  })]), _vm._v(" "), _c('el-dialog', {
	    attrs: {
	      "size": "tiny"
	    },
	    model: {
	      value: (_vm.dialogVisible),
	      callback: function($$v) {
	        _vm.dialogVisible = $$v
	      },
	      expression: "dialogVisible"
	    }
	  }, [_c('img', {
	    attrs: {
	      "width": "100%",
	      "src": _vm.dialogImageUrl,
	      "alt": ""
	    }
	  })]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-button', {
	    attrs: {
	      "type": "primary"
	    }
	  }, [_vm._v("默认按钮")])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e720716e", module.exports)
	  }
	}

/***/ })

});