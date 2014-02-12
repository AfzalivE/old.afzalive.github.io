EmberApp.Link = DS.Model.extend({
    name: DS.attr('string'),
    class: DS.attr('string'),
    url: DS.attr('string')
});

EmberApp.Link.FIXTURES = [
    {
        "id"    : 1,
        "name"  : "Twitter",
        "class" : "icon-twitter",
        "url"   : "http://www.twitter.com/AfzalivE"
    },
    {
        "id"    : 2,
        "name"  : "Google Plus",
        "class" : "icon-googleplus",
        "url"   : "http://plus.google.com/+AfzalNajam"
    },
    {
        "id"    : 3,
        "name"  : "GitHub",
        "class" : "icon-github",
        "url"   : "http://www.github.com/AfzalivE"
    },
    {
        "id"    : 4,
        "name"  : "LinkedIn",
        "class" : "icon-linkedin",
        "url"   : "http://www.linkedin.com/in/AfzalivE"
    }
];
