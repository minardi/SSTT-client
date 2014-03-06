/* TeamMembers */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     

	  defaults: {
	  	id: '',
   	    first_name: '', 
	    last_name: '',
        role: ''
      }		 
	});

})(app.TeamMembers);
