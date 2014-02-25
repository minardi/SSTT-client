/* Test1 */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/Test1/Test1Tpl.ejs'],        
 		
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

})(app.Test1);
