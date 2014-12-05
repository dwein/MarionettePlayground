define(['app'], function(App) {
    App.module('Testing', function(Testing, App) {
        var API = {
            list: function() {
                require(['apps/testing/list/list_controller'], function (controller) {
                    controller.list();
                });
            }
        }

        App.on('testing:go', function() {
            API.list();
        });
    });

    return App.Testing;
});