define(['app', 'apps/testing/list/list_view'], function (App, View) {
    App.module('Testing.List', function (List, App) {

        List.Controller = {
            list: function () {
                this.showPanel();
                this.showLayout();
            },

            showLayout: function () {
                var layout = new View.Layout();

                layout.on('show', function () {
                    layout.buttonRegion.show(this.panel);
                    
                    this.showCollection();
                }, this);

                this.layout = layout;

                App.mainRegion.show(layout);
            },

            showPanel: function () {
                var panel = new View.Panel();

                panel.on('reload', function () {
                    console.time('timing: closing region');

                    this.layout.content.empty();
                    
                    console.timeEnd('timing: closing region');

                    this.showCollection();
                }, this);   

                this.panel = panel;             
            },

            showCollection: function () {
                //---
                console.time('timing: creating collection');

                var models = [];
                _.times(6500, function (n) {
                    models.push(new Backbone.Model({ id: n, name: 'foo ' + n }));
                });

                var collection = new Backbone.Collection(models);
                
                //---
                console.timeEnd('timing: creating collection');

                var collectionView = new View.TestViewCollection({
                    collection: collection
                });

                //---
                console.time('timing: showing collection');

                this.layout.content.show(collectionView);
                
                //---
                console.timeEnd('timing: showing collection');
            }
        };

    });

    return App.Testing.List.Controller;
});