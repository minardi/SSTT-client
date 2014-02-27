/* Projectinfo */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     
		 
		 defaults: {
		 	title: "",
		 	description: "",
		 	owner: "",
		 	start: "",
		 	finish: "",
		 	role: "",
		 	pm: { 
		      user_id: "",
		      name: "",
		      surname: ""
		    }
         }		 
		 
	});

})(app.Projectinfo);
