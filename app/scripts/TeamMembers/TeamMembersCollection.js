/* TeamMembers */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
		 model: module.Model,
		  
		 initialize: function(team_id) {
            this.url = "/team_members/for-team" + team_id;
            this.fetch();
         }		 
		 
	});

})(app.TeamMembers);

