// EmberApp.ApplicationRoute = Ember.Route.extend({
//     // admittedly, this should be in IndexRoute and not in the
//     // top level ApplicationRoute; we're in transition... :-)
//     model: function () {
//         return this.store.find('link');
//     }
// });

EmberApp.HeaderRoute = Ember.Route.extend({
    model : function () {
        return this.store.find('link');
    }
});
