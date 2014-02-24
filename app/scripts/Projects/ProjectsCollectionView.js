// /* Projects */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({
     
    template: JST['app/scripts/Projects/ProjectsCollectionTpl.ejs'],        
        
    initialize: function() {
        this.projectsCollection = new module.Collection();
        this.projectsCollection.fetch();
        this.listenTo(this.projectsCollection, "sync", this.render);
    },

    events: {
    },

    subscriptions: {
    },

    render: function() {
        this.$el.html(this.template());
        this.projectsCollection.each(this.renderOne, this);
        return this;
    },

    renderOne: function(ProjectModel) {
        var project = new module.ModelView({
            model: ProjectModel
        });
        this.$el.find(".content").append(project.render().el);
    }       
     
});

})(app.Projects);