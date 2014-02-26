var user,
    app = {
    User: {},
    Projects: {},
    ScrumPage: {},
    ProductBacklogStories: {},
    SprintBacklogStories: {},
	ScrumPage:{},
    Projectinfo: {},
    empty: {}
};

$(function() {
    'use strict';

    user = new app.User.ModelView({
        el: $('.user')
    });
    
    Backbone.Mediator.sub("!user_load", function() {
        var my_project = new app.Projects.CollectionView({
                            el: $(".b-main")})});

    var scrum_page = new app.ScrumPage.ModelView({
        el: $(".b-main")
    }),
	    ProductBacklogStory = new app.ProductBacklogStories.CollectionView(),
        SprintBacklogStory = new app.SprintBacklogStories.CollectionView(),
        project_info = new app.Projectinfo.ModelView({
          el: $(".b-sidebar")
        });
});


