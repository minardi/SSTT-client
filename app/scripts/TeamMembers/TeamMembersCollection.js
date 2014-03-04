/* TeamMembers */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
		 model: module.Model,
		 
		 url: "/user",
            
		 initialize: function() {
            this.fetch();
         }		 
		 
	});

})(app.TeamMembers);

