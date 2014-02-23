/* User */

(function(module) {
        
	module.Model = Backbone.Model.extend({	     
		
		url: 'users/3.json',
		
		defaults: {
		 	first_name: '',
		 	last_name: ''
         },

		initialize: function () {
			this.fetch();			
		}
	});

})(app.User);