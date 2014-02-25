var user,
    app = {
    ProductBacklogStories: {},
    Projects: {},
    User: {},
    SprintBacklogStories: {},
	ScrumPage:{},
    empty: {}
};

$(function() {
    'use strict';

    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            // 'X-CSRF-Token': '<%= form_authenticity_token.to_s %>'
        }
    });

    user = new app.User.ModelView({
        el: $('.user')
    });
	
    console.log(user);
    Backbone.Mediator.sub("!user_load", function() {
        var my_project = new app.Projects.CollectionView({
                            el: $(".content")})});

    var product_backlog_stories = new app.ProductBacklogStories.CollectionView({
          el: $(".content")
        }),
 
	sprint_backlog_stories = new app.SprintBacklogStories.CollectionView({
          el: $(".content")
        }),
		
	scrum_page_view = new app.ScrumPage.ModelView({el: $(".content")});
});
