/* Test2 */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/Test2/Test2Tpl.ejs'],        
 		
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

})(app.Test2);
