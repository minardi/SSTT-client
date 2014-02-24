/* Projects */

(function(module) {
        
	module.Collection = Backbone.Collection.extend({	     
		 model: module.Model,
		 
		// url: "projects/for/3",
		//url: "projects/for/" + user.getId(),

		initialize: function() {
		// 	this.fetch();
		this.url = "projects/for/" + user.getId();
		 	
        }		 
		 
	});

})(app.Projects);

