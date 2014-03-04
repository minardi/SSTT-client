/* TeamMembers */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
		 model: module.Model,
		 
		 url: "/tasks/for-project",
		 
		 initialize: function() {
            this.fetch();
         }		 
		 
	});

})(app.TeamMembers);

