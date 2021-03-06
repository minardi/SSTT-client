/* Teams */

(function(module) {

    module.CollectionView = Backbone.View.extend({
        
        initialize: function() {
            //mediator.subscribeOnce("DashBoard:ActiveTeam", this.init, this);
            //mediator.subscribeOnce("DashBoard:ActiveBack", this.removeTeamPage, this);
        },

        template: JST['app/scripts/Teams/TeamsCollectionTpl.ejs'],

        subscriptions: {
            "DashBoard:ActiveTeam": "init",
            "TeamPage:TeamSelected": "hide",
            "DashBoard:ActiveBack": "removeTeamPage",
            "DashBoard:ActiveBackFromTeamEditPage": "show"
        },

        init: function(project_id) {
            this.TeamsCollection = new module.Collection(project_id);
            this.TeamsCollection.fetch();
            this.listenTo(this.TeamsCollection, "sync", this.render);
        },

        render: function() {
            mediator.pub("ScrumPage:remove")
            this.$el.append(this.template());
            this.TeamsCollection.each(this.renderOne, this);
            return this;
        },

        renderOne: function(projectModel) {
            var project = new module.ModelView({
                model: projectModel
            });
            this.$el.find(".content.team-page").append(project.render().el);
        },

        hide: function() {
            this.$el.addClass("hiddenTeams");
            //this.stopListening();
        },

        removeTeamPage: function() {
            this.$el.find(".team-page").remove();
        },

        show: function() {
            this.$el.removeClass("hiddenTeams");
        }
        
    });

})(app.Teams);

