webpackJsonp([0],{0:function(a,b,c){a.exports=c(1)},1:function(a,b,c){'use strict';c(2),c(3);var d=c(4),e=c(5),f=c(6),g=c(7),h=c(8),i=c(10),j={count:0};d.use(e),d.use(f),d.use(h),d.use(i),d.http.options.emulateJSON=!0,window.router=new e({saveScrollPosition:!0,transitionOnLoad:!0,routes:c(73)}),router.beforeEach(function(a,b,c){c()}),window.store=new f.Store({modules:{tips:c(90),loading:c(91),header:c(92),footer:c(93)},strict:!1,middlewares:[g()]}),d.http.interceptors.push(function(a,b){'undefined'==typeof j[a.url]?(j[a.url]=a,++j.count):j[a.url]=a,0<j.count,b(function(b){delete j[a.url],--j.count,0==j.count,200!=b.body.code})}),d.directive('autoHeight',{bind:function(a){var b=a.dataset.delHeight||0;a.style.height=window.innerHeight-b+'px',a.style['max-height']=window.innerHeight-b+'px',window.onresize=function(){a.style.height=window.innerHeight-b+'px',a.style['max-height']=window.innerHeight-b+'px'}}}),window.app=new d({router:router,store:store}).$mount('#app')},2:function(){},3:function(){},73:function(a,b,c){'use strict';a.exports=[{path:'/',name:'main',component:function(a){c.e(1,function(){a(c(74))})}},{path:'/main',name:'main',component:function(a){c.e(1,function(){a(c(74))})},children:[{path:'simple-demo',name:'simple-demo',component:function(a){c.e(2,function(){a(c(77))})}},{path:'form-demo',name:'form-demo',component:function(a){c.e(3,function(){a(c(84))})}},{path:'list-demo',name:'list-demo',component:function(a){c.e(4,function(){a(c(87))})}}]}]},90:function(a){'use strict';var b=null;a.exports={state:{msg:'',newPlayerTips:'',costScore:''},mutations:{SET_TIPS_MSG:function(a,c){a.msg=c,clearTimeout(b),b=setTimeout(function(){a.msg=''},3e3)},SET_NEW_PLAYER_TIPS:function(a,b){a.newPlayerTips=b},SET_COST_SCORE:function(a,b){a.costScore=b}},actions:{showTips:function(a,b){a.commit('SET_TIPS_MSG',b)},setNewPlayerTips:function(a,b){a.commit('SET_NEW_PLAYER_TIPS',b)},setCostScore:function(a,b){a.commit('SET_COST_SCORE',b)}}}},91:function(a){'use strict';a.exports={state:{isShow:!1},mutations:{SHOW_LOADING:function(a){a.isShow=!0},HIDE_LOADING:function(a){a.isShow=!1}},actions:{showLoading:function(a){a.commit('SHOW_LOADING')},hideLoading:function(a){a.commit('HIDE_LOADING')}}}},92:function(a){'use strict';a.exports={state:{headerConfig:{title:null,leftBtnCls:'icon-back',hideLeftBtn:!1,rightBtnCls:'icon-home',hideRightBtn:!1}},mutations:{SET_TITLE:function(a,b){a.headerConfig.title=b},SET_CONFIG:function(a,b){for(var c in b)'undefined'!=typeof a.headerConfig[c]&&(a.headerConfig[c]=b[c])}},actions:{setTitle:function(a,b){a.commit('SET_TITLE',b)},setConfig:function(a,b){a.commit('SET_CONFIG',b)}}}},93:function(a){'use strict';a.exports={state:{activeTab:0},mutations:{SET_TAB_ACTIVE:function(a,b){a.activeTab=b}},actions:{setTabActive:function(a,b){a.commit('SET_TAB_ACTIVE',b)}}}}});