/* UserCandidates */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({

		 model: module.Model,
		 
		  initialize: function(project_id) {
            this.url = "/users/for-project/" + project_id;
            this.fetch();
        }	 
		 
	});

})(app.UserCandidates);

