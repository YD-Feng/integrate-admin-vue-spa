module.exports = [
    {
        path: '/',
        name: 'main',
        component: function (resolve) {
            require.ensure(['./../views/main.vue'], function (require) {
                resolve(require('./../views/main.vue'));
            }, 'main');
        }
    },
    {
        path: '/main',
        name: 'main',
        component: function (resolve) {
            require.ensure(['./../views/main.vue'], function (require) {
                resolve(require('./../views/main.vue'));
            }, 'main');
        },
        children: [
            {
                path: 'simple-demo',
                name: 'simple-demo',
                component: function (resolve) {
                    require.ensure(['./../views/main/simple-demo.vue'], function (require) {
                        resolve(require('./../views/main/simple-demo.vue'));
                    }, 'simple-demo');
                }
            },
            {
                path: 'form-demo',
                name: 'form-demo',
                component: function (resolve) {
                    require.ensure(['./../views/main/form-demo.vue'], function (require) {
                        resolve(require('./../views/main/form-demo.vue'));
                    }, 'form-demo');
                }
            },
            {
                path: 'list-demo',
                name: 'list-demo',
                component: function (resolve) {
                    require.ensure(['./../views/main/list-demo.vue'], function (require) {
                        resolve(require('./../views/main/list-demo.vue'));
                    }, 'list-demo');
                }
            }
        ]
    }
];
