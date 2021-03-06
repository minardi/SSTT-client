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
            "ProjectPage:ProjectSelected": "hide",
            "DashBoard:ActiveTeam": "hide",
            "DashBoard:ActiveBack": "show"
        },

        hide: function() {
            this.$el.addClass("hiddenProjects");
            this.stopListening();
        },

        show: function() {
            this.render();
            this.$el.removeClass("hiddenProjects");
        },
        
        render: function() {
            this.$el.find(".project-page").remove();
            this.$el.append(this.template());
            this.projectsCollection.each(this.renderOne, this);            
            return this;
        },

        renderOne: function(projectModel) {
            var project = new module.ModelView({
                model: projectModel
            });
            this.$el.find(".content").append(project.render().el);
        }
     
    });

})(app.Projects);