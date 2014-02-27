/* Projects */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     
		 
		 defaults: {
		 	title: "",
		 	description: "",
		 	owner: "",
		 	start: "",
		 	finish: "",
		 	role: ""
		 	//pm: ""
         }		 
		 
	});

})(app.Projects);
