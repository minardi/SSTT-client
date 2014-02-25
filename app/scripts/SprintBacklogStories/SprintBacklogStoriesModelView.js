/* SprintBacklogStories */

;(function(module) {
        
	module.ModelView = Backbone.View.extend({	     

		tagName: "tr",
        className: "",
    
        template: JST['app/scripts/SprintBacklogStories/SprintBacklogStoriesTpl.ejs'],        
 		
		initialize: function() {
        },

        events: {

        },

        subscriptions: {

        },	

        render: function() {
		  this.$el.html(this.template({model:this.model.toJSON()}));
    	  return this;
        }

    })
	
})(app.SprintBacklogStories);
