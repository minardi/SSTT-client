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
    
    var project = new app.Projects.CollectionView({
            el: $(".b-main")
        });

	var SSTT = {
        scrum_page: new app.ScrumPage.ModelView({
            el: $(".b-main"),
			model: new app.ScrumPage.Model()
        }),
        product_backlog: new app.ProductBacklogStories.CollectionView(),
        sprint_backlog: new app.SprintBacklogStories.CollectionView(),
        project_info: new app.Projectinfo.ModelView({
            el: $(".b-sidebar")
        })
    };

});