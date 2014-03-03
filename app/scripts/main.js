var sstt = {},
    app = {
    User: {},
    Projects: {},
    ScrumPage: {},
    ProductBacklogStories: {},
    SprintBacklogStories: {},
    ScrumPage:{},
    Projectinfo: {},
    DashBoard: {},
    ScrumBoard: {},
    TeamEditPage: {},
    UserCandidates: {},
    TeamMembers: {},
    Teams: {},
    empty: {}
};

$(function() {
    'use strict';

    sstt.user = new app.User.ModelView({
        el: $('.user'),
        user_content: current_user_content
    });

    sstt.project = new app.Projects.CollectionView({
        el: $(".b-main")
    });

    sstt.scrum_page = new app.ScrumPage.ModelView({
        el: $(".b-main"),
        model: new app.ScrumPage.Model()
    });

    sstt.project_info = new app.Projectinfo.ModelView({
        el: $(".b-sidebar")
    });

    /*sstt.dashboard = new app.DashBoard.ModelView({
        el: $(".b-dash"),
        model: new app.DashBoard.Model()
    });
    */

    sstt.product_backlog = new app.ProductBacklogStories.CollectionView();

    sstt.sprint_backlog = new app.SprintBacklogStories.CollectionView();

    sstt.user_candidates = new app.UserCandidates.CollectionView();

    sstt.scrum_board = new app.ScrumBoard.CollectionView();

    sstt.team_edit_page = new app.TeamEditPage.ModelView({
        el: $('.b-main')
    });
    sstt.dashboard = new app.DashBoard.CollectionView({
        el: $('.b-dash')
    });

    sstt.teams = new app.Teams.CollectionView({
        el: $(".b-main")
    });  
    
    sstt.team_members = new app.TeamMembers.CollectionView();

    $("#test").on("click", function() {
        Backbone.Mediator.pub("ButtonTeamClick", 1)
    })
});
