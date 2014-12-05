define(['backbone', 'backbone.marionette'],
    function(Backbone, Marionette) {
        var app = new Backbone.Marionette.Application();

        app.addRegions({
            mainRegion: '.wfx-app',
        });

        app.on('start', function() {
            require(['apps/testing/testing_app'], function () {
                app.trigger('testing:go');    
            });
        });

        return app;
    });