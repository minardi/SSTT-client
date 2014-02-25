var user,
    app = {
    User: {},
    Projects: {},
    ScrumPage: {},
    ProductBacklogStories: {},
    SprintBacklogStories: {},
	ScrumPage:{},
    empty: {}
};

$(function() {
    'use strict';

    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });

    user = new app.User.ModelView({
        el: $('.user')
    });
	
    Backbone.Mediator.sub("!user_load", function() {
        var my_project = new app.Projects.CollectionView({
                            el: $(".b-main")})});

    var scrum_page = new app.ScrumPage.ModelView({
        el: $(".b-main")
    })

});


