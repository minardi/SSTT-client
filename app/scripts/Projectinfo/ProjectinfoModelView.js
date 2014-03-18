/* Projectinfo */

(function(module) {
        
    module.ModelView = Backbone.View.extend({        
        
        template: JST['app/scripts/Projectinfo/ProjectinfoTpl.ejs'],        
        
        subscriptions: {
            "ProjectPage:ProjectChecked": "showProjectInfo"          
        },

        showProjectInfo: function(project_id) {      
            this.project = new module.Model({id: project_id});
            this.project.fetch();
            this.project.on("sync", this.render, this);
        },

        render: function() {
            this.$el.html(this.template(this.project.toJSON()));
            return this;
        }
  });
    
})(app.Projectinfo);
