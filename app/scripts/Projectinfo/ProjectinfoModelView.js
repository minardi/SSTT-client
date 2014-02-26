/* Projectinfo */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/Projectinfo/ProjectinfoTpl.ejs'],        
 		
	  initialize: function() {
        },

        events: {
        },

        subscriptions: {
          "Projects:getInfo": "showProjectInfo"
        },

        showProjectInfo: function(project_model) {
          this.project = project_model;
          this.render();
        },	

        render: function() {
          this.$el.html(this.template({project:this.project.toJSON()}));
          return this;
        }		
		 
	});

})(app.Projectinfo);