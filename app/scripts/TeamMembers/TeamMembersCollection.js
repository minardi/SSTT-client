/* TeamMembers */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
      model: new module.Model,
		 
	 url: "/team_members",
		 
	  initialize: function() {
        //this.url = "/users/for-team/" + team_id;
        this.fetch();	 
	  }
    });
     
})(app.TeamMembers);

