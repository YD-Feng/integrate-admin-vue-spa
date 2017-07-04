webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//加载初始化样式

	__webpack_require__(2);
	__webpack_require__(3);

	var Vue = __webpack_require__(4),
	    VueRouter = __webpack_require__(5),
	    Vuex = __webpack_require__(6),
	    VuexLogger = __webpack_require__(7),
	    VueResource = __webpack_require__(8),
	    ElementUI = __webpack_require__(10),
	    xhrPool = {
	    count: 0
	};

	Vue.use(VueRouter);
	Vue.use(Vuex);
	Vue.use(VueResource);
	Vue.use(ElementUI);

	Vue.http.options.emulateJSON = true;

	//实例化 vue-router
	window.router = new VueRouter({
	    saveScrollPosition: true,
	    transitionOnLoad: true,
	    routes: __webpack_require__(73)
	});

	router.beforeEach(function (to, from, next) {
	    /*if (to.name != 'login' && to.name != 'forgetPwd' && !localStorage.getItem('hasLogin')) {
	        router.push({
	            path: '/login'
	        });
	    } else {
	        next();
	    }*/

	    next();
	});

	window.store = new Vuex.Store({
	    modules: {
	        tips: __webpack_require__(86),
	        loading: __webpack_require__(87),
	        header: __webpack_require__(88),
	        footer: __webpack_require__(89)
	    },
	    strict: false,
	    middlewares: [VuexLogger()]
	});

	Vue.http.interceptors.push(function (request, next) {
	    if (typeof xhrPool[request.url] == 'undefined') {
	        xhrPool[request.url] = request;
	        xhrPool['count'] = xhrPool['count'] + 1;
	    } else {
	        xhrPool[request.url] = request;
	    }

	    if (xhrPool['count'] > 0) {
	        //window.store.dispatch('showLoading');
	    }

	    next(function (response) {
	        delete xhrPool[request.url];
	        xhrPool['count'] = xhrPool['count'] - 1;

	        if (xhrPool['count'] == 0) {
	            //window.store.dispatch('hideLoading');
	        }

	        if (response.body.code != 200) {
	            //window.store.dispatch('showTips', response.body.msg);
	        }
	    });
	});

	Vue.directive('autoHeight', {
	    bind: function bind(el) {
	        var delHeight = el.dataset.delHeight || 0;
	        el.style['height'] = window.innerHeight - delHeight + 'px';
	        el.style['max-height'] = window.innerHeight - delHeight + 'px';

	        window.onresize = function () {
	            el.style['height'] = window.innerHeight - delHeight + 'px';
	            el.style['max-height'] = window.innerHeight - delHeight + 'px';
	        };
	    }
	});

	window.app = new Vue({
	    router: router,
	    store: store
	}).$mount('#app');

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = [{
	    path: '/',
	    name: 'main',
	    component: function component(resolve) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            resolve(__webpack_require__(74));
	        });
	    }
	}, {
	    path: '/main',
	    name: 'main',
	    component: function component(resolve) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            resolve(__webpack_require__(74));
	        });
	    },
	    children: [{
	        path: 'simple-demo',
	        name: 'simple-demo',
	        component: function component(resolve) {
	            __webpack_require__.e/* nsure */(2, function (require) {
	                resolve(__webpack_require__(77));
	            });
	        }
	    }, {
	        path: 'form-demo',
	        name: 'form-demo',
	        component: function component(resolve) {
	            __webpack_require__.e/* nsure */(3, function (require) {
	                resolve(__webpack_require__(80));
	            });
	        }
	    }, {
	        path: 'list-demo',
	        name: 'list-demo',
	        component: function component(resolve) {
	            __webpack_require__.e/* nsure */(4, function (require) {
	                resolve(__webpack_require__(83));
	            });
	        }
	    }]
	}];

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

	'use strict';

	var timeoutObj = null;

	module.exports = {
	    state: {
	        msg: '',
	        newPlayerTips: '',
	        costScore: ''
	    },
	    mutations: {
	        SET_TIPS_MSG: function SET_TIPS_MSG(state, msg) {
	            state.msg = msg;

	            clearTimeout(timeoutObj);
	            timeoutObj = setTimeout(function () {
	                state.msg = '';
	            }, 3000);
	        },

	        SET_NEW_PLAYER_TIPS: function SET_NEW_PLAYER_TIPS(state, tips) {
	            state.newPlayerTips = tips;
	        },

	        SET_COST_SCORE: function SET_COST_SCORE(state, score) {
	            state.costScore = score;
	        }
	    },
	    actions: {
	        showTips: function showTips(store, msg) {
	            store.commit('SET_TIPS_MSG', msg);
	        },

	        setNewPlayerTips: function setNewPlayerTips(store, tips) {
	            store.commit('SET_NEW_PLAYER_TIPS', tips);
	        },

	        setCostScore: function setCostScore(store, score) {
	            store.commit('SET_COST_SCORE', score);
	        }
	    }
	};

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    state: {
	        isShow: false
	    },
	    mutations: {
	        SHOW_LOADING: function SHOW_LOADING(state) {
	            state.isShow = true;
	        },
	        HIDE_LOADING: function HIDE_LOADING(state) {
	            state.isShow = false;
	        }
	    },
	    actions: {
	        showLoading: function showLoading(store) {
	            store.commit('SHOW_LOADING');
	        },

	        hideLoading: function hideLoading(store) {
	            store.commit('HIDE_LOADING');
	        }
	    }
	};

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    state: {
	        headerConfig: {
	            title: null,
	            leftBtnCls: 'icon-back',
	            hideLeftBtn: false,
	            rightBtnCls: 'icon-home',
	            hideRightBtn: false
	        }
	    },
	    mutations: {
	        SET_TITLE: function SET_TITLE(state, title) {
	            state.headerConfig.title = title;
	        },
	        SET_CONFIG: function SET_CONFIG(state, config) {
	            for (var name in config) {
	                if (typeof state.headerConfig[name] != 'undefined') {
	                    state.headerConfig[name] = config[name];
	                }
	            }
	        }
	    },
	    actions: {
	        setTitle: function setTitle(store, title) {
	            store.commit('SET_TITLE', title);
	        },

	        setConfig: function setConfig(store, config) {
	            store.commit('SET_CONFIG', config);
	        }
	    }
	};

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	'use strict';

	var timeoutObj = null;

	module.exports = {
	    state: {
	        activeTab: 0
	    },
	    mutations: {
	        SET_TAB_ACTIVE: function SET_TAB_ACTIVE(state, tabIndex) {
	            state.activeTab = tabIndex;
	        }
	    },
	    actions: {
	        setTabActive: function setTabActive(store, tabIndex) {
	            store.commit('SET_TAB_ACTIVE', tabIndex);
	        }
	    }
	};

/***/ })

});