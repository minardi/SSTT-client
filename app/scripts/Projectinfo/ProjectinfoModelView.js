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
            var right_for_project = {
                id: this.project.id,
                right: ((this.project.get("pm").user_id == sstt.user.getId())? "pm": "not_pm")
            };
            this.$el.html(this.template(this.project.toJSON()));
            mediator.pub("ProjectInfo:Checked", right_for_project);
            return this;
        }
  });
    
})(app.Projectinfo);
