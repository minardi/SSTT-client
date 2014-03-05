/* TeamMembers */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
		 model: module.Model,
		 
		 url: "/team_members",
		 
		 initialize: function() {
            this.fetch();
         }		 
		 
	});

})(app.TeamMembers);

