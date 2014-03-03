/* TeamMembers */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/TeamMembers/TeamMembersTpl.ejs'],        
 		
		initialize: function() {
            this.render();
        },

        events: {
        },

        subscriptions: {
        },	

        render: function() {
		    this.$el.html(this.template(this.model.toJSON()));
			return this;
        }		
		 
	});

})(app.TeamMembers);
