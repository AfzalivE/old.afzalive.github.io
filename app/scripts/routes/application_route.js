EmberApp.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        // return ['red', 'yellow', 'blue'];
        return [
            {
                "name"  : "Twitter",
                "class" : "icon-twitter",
                "url"   : "http://www.twitter.com/AfzalivE"
            },
            {
                "name"  : "Google Plus",
                "class" : "icon-googleplus",
                "url"   : "http://plus.google.com/+AfzalNajam"
            },
            {
                "name"  : "GitHub",
                "class" : "icon-github",
                "url"   : "http://www.github.com/AfzalivE"
            },
            {
                "name"  : "LinkedIn",
                "class" : "icon-linkedin",
                "url"   : "http://www.linkedin.com/in/AfzalivE"
            }
        ]
    }
});
