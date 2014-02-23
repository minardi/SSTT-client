/* Test2 */

(function(module) {
        
	module.CollectionView = Backbone.View.extend({	     
		
        template: JST['app/scripts/Test2/Test2CollectionTpl.ejs'],        
 		
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

