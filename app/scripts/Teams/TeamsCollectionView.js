/* Teams */

(function(module) {

    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/Teams/TeamsCollectionTpl.ejs'],

        subscriptions: {
            "Button:Click:Team": "init",
            "Team:Selected": "hide",
            "Button:Click:Back": "removeTeamPage"
        },

        init: function(project_id) {
            this.TeamsCollection = new module.Collection(project_id);
            this.TeamsCollection.fetch();
            this.listenTo(this.TeamsCollection, "sync", this.render);
        },

        render: function() {
            Backbone.Mediator.pub("ScrumPage:remove")
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
        },

        removeTeamPage: function() {
            this.$el.find(".team-page").remove();
        }

    });

})(app.Teams);

