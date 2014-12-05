define(['app', 'hbs!apps/testing/list/templates/list_item', 'hbs!apps/testing/list/templates/layout', 'hbs!apps/testing/list/templates/panel'], 
    function (App, itemTpl, layoutTpl, panelTpl) {
        App.module('testing.List.View', function(View) {
            View.Layout = Marionette.LayoutView.extend({
                template:layoutTpl,
                regions: {
                    buttonRegion: '.testViewButton',
                    content: '.contentRegion'
                }
            });

            View.Panel = Marionette.ItemView.extend({
                template: panelTpl,
                triggers: { 'mouseup': 'reload'}
            });

            View.TestView = Marionette.ItemView.extend({
                template: itemTpl,
                tagName: 'li'
            });

            View.TestViewCollection = Marionette.CollectionView.extend({
                tagName: 'ul',
                childView: View.TestView
            });
        });

    return App.testing.List.View;
});