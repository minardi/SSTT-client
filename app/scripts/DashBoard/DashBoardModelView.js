/* DashBoard */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/DashBoard/DashBoardTpl.ejs'],        
 		
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

})(app.DashBoard);
