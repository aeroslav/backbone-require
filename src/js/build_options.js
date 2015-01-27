({
    baseUrl: './src/js/',
    paths: {
        'underscore': './libs/underscore-min',
        'jquery': './libs/jquery',
        'backbone': './libs/backbone-min'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    name: 'main',
    out: 'js/main-prod.js'
})