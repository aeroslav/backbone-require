define(function(require){
    'use strict';
    var b = require('backbone');

    var Router = Backbone.Router.extend({
        routes: {
            '': 'start',
            '!/': 'start'
        },
        start: function () {
            console.log('route #start activated');
        }
    });

    return Router;
});