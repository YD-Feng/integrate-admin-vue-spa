webpackJsonp([4],{110:function(a){a.exports={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c('div',[c('el-breadcrumb',[c('el-breadcrumb-item',[a._v('\u8FD0\u8425\u7CFB\u7EDF')]),a._v(' '),c('el-breadcrumb-item',[a._v('\u8868\u5355\u793A\u4F8B')])],1),a._v(' '),c('div',{staticClass:'cm-form'},[c('el-form',{ref:'ruleForm',staticClass:'demo-ruleForm',attrs:{model:a.ruleForm,rules:a.rules,"label-width":'100px'}},[c('el-form-item',{attrs:{label:'\u6D3B\u52A8\u540D\u79F0',prop:'name'}},[c('el-input',{model:{value:a.ruleForm.name,callback:function(b){a.ruleForm.name=b},expression:'ruleForm.name'}})],1),a._v(' '),c('el-form-item',{attrs:{label:'\u6D3B\u52A8\u533A\u57DF',prop:'region'}},[c('el-select',{attrs:{placeholder:'\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF'},model:{value:a.ruleForm.region,callback:function(b){a.ruleForm.region=b},expression:'ruleForm.region'}},[c('el-option',{attrs:{label:'\u533A\u57DF\u4E00',value:'shanghai'}}),a._v(' '),c('el-option',{attrs:{label:'\u533A\u57DF\u4E8C',value:'beijing'}})],1)],1),a._v(' '),c('el-form-item',{attrs:{label:'\u6D3B\u52A8\u65F6\u95F4',required:''}},[c('el-col',{attrs:{span:11}},[c('el-form-item',{attrs:{prop:'date1'}},[c('el-date-picker',{staticStyle:{width:'100%'},attrs:{type:'date',placeholder:'\u9009\u62E9\u65E5\u671F'},model:{value:a.ruleForm.date1,callback:function(b){a.ruleForm.date1=b},expression:'ruleForm.date1'}})],1)],1),a._v(' '),c('el-col',{staticClass:'line',staticStyle:{"text-align":'center'},attrs:{span:2}},[a._v('-')]),a._v(' '),c('el-col',{attrs:{span:11}},[c('el-form-item',{attrs:{prop:'date2'}},[c('el-time-picker',{staticStyle:{width:'100%'},attrs:{type:'fixed-time',placeholder:'\u9009\u62E9\u65F6\u95F4'},model:{value:a.ruleForm.date2,callback:function(b){a.ruleForm.date2=b},expression:'ruleForm.date2'}})],1)],1)],1),a._v(' '),c('el-form-item',{attrs:{label:'\u5373\u65F6\u914D\u9001',prop:'delivery'}},[c('el-switch',{attrs:{"on-text":'',"off-text":''},model:{value:a.ruleForm.delivery,callback:function(b){a.ruleForm.delivery=b},expression:'ruleForm.delivery'}})],1),a._v(' '),c('el-form-item',{attrs:{label:'\u6D3B\u52A8\u6027\u8D28',prop:'type'}},[c('el-checkbox-group',{model:{value:a.ruleForm.type,callback:function(b){a.ruleForm.type=b},expression:'ruleForm.type'}},[c('el-checkbox',{attrs:{label:'\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8',name:'type'}}),a._v(' '),c('el-checkbox',{attrs:{label:'\u5730\u63A8\u6D3B\u52A8',name:'type'}}),a._v(' '),c('el-checkbox',{attrs:{label:'\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8',name:'type'}}),a._v(' '),c('el-checkbox',{attrs:{label:'\u5355\u7EAF\u54C1\u724C\u66DD\u5149',name:'type'}})],1)],1),a._v(' '),c('el-form-item',{attrs:{label:'\u7279\u6B8A\u8D44\u6E90',prop:'resource'}},[c('el-radio-group',{model:{value:a.ruleForm.resource,callback:function(b){a.ruleForm.resource=b},expression:'ruleForm.resource'}},[c('el-radio',{attrs:{label:'1'}},[a._v('\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9')]),a._v(' '),c('el-radio',{attrs:{label:'2'}},[a._v('\u7EBF\u4E0B\u573A\u5730\u514D\u8D39')])],1)],1),a._v(' '),c('el-form-item',{attrs:{label:'\u6D3B\u52A8\u5F62\u5F0F',prop:'desc'}},[c('el-input',{attrs:{type:'textarea',autosize:{minRows:4,maxRows:8}},model:{value:a.ruleForm.desc,callback:function(b){a.ruleForm.desc=b},expression:'ruleForm.desc'}})],1),a._v(' '),c('el-form-item',[c('el-button',{attrs:{type:'primary'},on:{click:function(){a.submitForm('ruleForm')}}},[a._v('\u7ACB\u5373\u521B\u5EFA')]),a._v(' '),c('el-button',{on:{click:function(){a.resetForm('ruleForm')}}},[a._v('\u91CD\u7F6E')])],1)],1)],1)],1)},staticRenderFns:[]},a.exports.render._withStripped=!0,!1},33:function(a,b,c){var d=c(91)(c(97),c(110),null,null,null);d.options.__file='F:\\code\\@integrate-admin-vue-spa\\src\\views\\main\\form-demo.vue',d.esModule&&Object.keys(d.esModule).some(function(a){return'default'!==a&&'__'!==a.substr(0,2)})&&console.error('named exports are not supported in *.vue files.'),d.options.functional&&console.error('[vue-loader] form-demo.vue: functional components are not supported with templates, they should use render functions.'),!1,a.exports=d.exports},91:function(a){a.exports=function(a,b,c,d,e){var f,g=a=a||{},h=typeof a.default;('object'==h||'function'==h)&&(f=a,g=a.default);var i='function'==typeof g?g.options:g;b&&(i.render=b.render,i.staticRenderFns=b.staticRenderFns),d&&(i._scopeId=d);var j;if(e?(j=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||'undefined'==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),c&&c.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(e)},i._ssrRegister=j):c&&(j=c),j){var k=i.functional,l=k?i.render:i.beforeCreate;k?i.render=function(a,b){return j.call(b),l(a,b)}:i.beforeCreate=l?[].concat(l,j):[j]}return{esModule:f,exports:g,options:i}}},97:function(a){'use strict';a.exports={created:function(){var a=this;window.vm=a},data:function(){return{ruleForm:{name:'',region:'',date1:'',date2:'',delivery:!1,type:[],resource:'',desc:''},rules:{name:[{required:!0,message:'\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0',trigger:'blur'},{min:3,max:5,message:'\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26',trigger:'blur'}],region:[{required:!0,message:'\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF',trigger:'change'}],date1:[{type:'date',required:!0,message:'\u8BF7\u9009\u62E9\u65E5\u671F',trigger:'change'}],date2:[{type:'date',required:!0,message:'\u8BF7\u9009\u62E9\u65F6\u95F4',trigger:'change'}],type:[{type:'array',required:!0,message:'\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28',trigger:'change'}],resource:[{required:!0,message:'\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90',trigger:'change'}],desc:[{required:!0,message:'\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F',trigger:'blur'}]}}},methods:{submitForm:function(a){this.$refs[a].validate(function(a){return a?void this.$alert('submit!'):(console.log('error submit!!'),!1)})},resetForm:function(a){this.$refs[a].resetFields()}}}}});