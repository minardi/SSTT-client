/* Teams */

(function(module) {

    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/Teams/TeamsCollectionTpl.ejs'],

        subscriptions: {
            "Button:Click:Team": "init",
            "Team:Selected": "hide"
        },

        init: function(project_id) {
            this.TeamsCollection = new module.Collection(project_id);
            this.TeamsCollection.fetch();
            this.listenTo(this.TeamsCollection, "sync", this.render);
        },

        render: function() {
            this.$el.html(this.template());
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
            this.$el.find(".content.team-page").hide();
        }

    });

})(app.Teams);

