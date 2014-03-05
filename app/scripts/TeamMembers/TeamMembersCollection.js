/* TeamMembers */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
      model: module.Model,
		 
<<<<<<< HEAD
		 url: "/team_members",
		 
		 initialize: function() {
            this.fetch();
         }		 
		 
	});

=======
	  initialize: function(team_id) {
        this.url = "/users/for-team/" + team_id;
        this.fetch();	 
	  }
    });
     
>>>>>>> c64b0ce59a6fe8c52678a15bfaf83c1afef90c0d
})(app.TeamMembers);

