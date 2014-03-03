/* TeamMember */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/TeamMember/TeamMemberTpl.ejs'],        
 		
		initialize: function() {
        },

        events: {
        },

        subscriptions: {
        },	

        render: function() {
		    
			return this;
        }		
		 
	});

})(app.TeamMember);
