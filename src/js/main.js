requirejs.config({
    baseUrl: 'js',
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
    }
});
requirejs(['app'], function(app) {
    console.log('main module loaded');
});