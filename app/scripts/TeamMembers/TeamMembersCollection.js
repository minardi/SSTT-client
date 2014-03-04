/* TeamMembers */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
		 model: module.Model,
		 
		 url: "/team_members/for-team",
		 
		 initialize: function() {
            this.fetch();
         }		 
		 
	});

})(app.TeamMembers);

