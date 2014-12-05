"use strict";

require.config({
    noGlobal: false,
    baseUrl: "/scripts",

    paths: {
        "jquery": 'vendor/jquery/jquery-1.9.1',
        "underscore": 'vendor/lodash',
        "backbone": 'vendor/backbone/backbone',

        "backbone.marionette": 'vendor/backbone/backbone.marionette',
        "backbone.radio": 'vendor/backbone/backbone.radio',
        "backbone.babysitter": 'vendor/backbone/backbone.babysitter',
        "backbone.wreqr": 'vendor/backbone/backbone.wreqr',

        "handlebars": 'vendor/require/hbs/handlebars',
        "hbs": 'vendor/require/hbs',
        "text": 'vendor/require/text'
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'backbone.marionette': {
            deps: ['backbone', 'backbone.radio', 'backbone.babysitter', 'backbone.wreqr'],
            exports: 'Marionette'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },

    hbs: {
        templateExtension: ".html",
        compilerPath: "vendor/require/hbs/handlebars"
    },

    text: {
        env: 'xhr'
    },

    packages: [{
        // Include hbs as a package, so it will find hbs-builder when needed
        name: "hbs",
        location: "vendor/require/hbs",
        main: "hbs"
    }]
});