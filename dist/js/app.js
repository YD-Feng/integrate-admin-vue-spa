webpackJsonp([6],{

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//加载初始化样式

__webpack_require__(82);
__webpack_require__(83);

var Vue = __webpack_require__(2),
    VueRouter = __webpack_require__(18),
    Vuex = __webpack_require__(20),
    VuexLogger = __webpack_require__(19),
    VueResource = __webpack_require__(17),
    ElementUI = __webpack_require__(16),
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
    routes: __webpack_require__(59)
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
        tips: __webpack_require__(63),
        loading: __webpack_require__(62),
        header: __webpack_require__(61),
        footer: __webpack_require__(60)
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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
    path: '/',
    name: 'main',
    component: function component(resolve) {
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
            resolve(__webpack_require__(8));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
}, {
    path: '/main',
    name: 'main',
    component: function component(resolve) {
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
            resolve(__webpack_require__(8));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    },
    children: [{
        path: 'store-account-info',
        name: 'store-account-info',
        component: function component(resolve) {
            __webpack_require__.e/* require.ensure */(1).then((function (require) {
                resolve(__webpack_require__(36));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    }, {
        path: 'store-account-approve',
        name: 'store-account-approve',
        component: function component(resolve) {
            __webpack_require__.e/* require.ensure */(8).then((function (require) {
                resolve(__webpack_require__(118));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    }, {
        path: 'simple-demo',
        name: 'simple-demo',
        component: function component(resolve) {
            __webpack_require__.e/* require.ensure */(2).then((function (require) {
                resolve(__webpack_require__(35));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    }, {
        path: 'form-demo',
        name: 'form-demo',
        component: function component(resolve) {
            __webpack_require__.e/* require.ensure */(4).then((function (require) {
                resolve(__webpack_require__(33));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    }, {
        path: 'list-demo',
        name: 'list-demo',
        component: function component(resolve) {
            __webpack_require__.e/* require.ensure */(3).then((function (require) {
                resolve(__webpack_require__(34));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    }]
}];

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ })

},[88]);