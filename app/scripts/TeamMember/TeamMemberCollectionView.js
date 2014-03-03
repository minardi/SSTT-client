/* TeamMember */

(function(module) {
        
	module.CollectionView = Backbone.View.extend({	     
		
        template: JST['app/scripts/TeamMember/TeamMemberCollectionTpl.ejs'],        
 		
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

