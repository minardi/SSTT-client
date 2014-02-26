// /* Projects */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({
     
        template: JST['app/scripts/Projects/ProjectsCollectionTpl.ejs'],        
            
        initialize: function() {
            this.projectsCollection = new module.Collection();
            this.projectsCollection.fetch();
            this.listenTo(this.projectsCollection, "sync", this.render);
        },

        subscriptions: {
            "Project:Selected": "hide"
        },

        render: function() {
            this.$el.html(this.template());
            this.projectsCollection.each(this.renderOne, this);
            return this;
        },

        renderOne: function(projectModel) {
            var project = new module.ModelView({
                model: projectModel
            });
            this.$el.find(".content").append(project.render().el);
        },

        hide: function() {
            this.$el.addClass("hiddenProjects");
        }
     
    });

})(app.Projects);