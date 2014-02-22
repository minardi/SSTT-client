// /* Projects */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({
     
    template: JST['app/scripts/Projects/ProjectsCollectionTpl.ejs'],        
        
    initialize: function() {
        this.projectsCollection = new module.Collection();
        this.listenTo(this.projectsCollection, "sync", this.render);
        this.projectsCollection.fetch();
    },

    events: {
    },

    subscriptions: {
    },  

    render: function() {
        //user.getId();
        this.$el.html(this.template());
        this.projectsCollection.each(this.renderOne, this);
        
        return this;
    },

    renderOne: function(ProjectModel) {
        var project = new module.ModelView({
            model: ProjectModel
        });
        this.$el.append(project.render().el);
    }       
     
});

})(app.Projects);