/* DashBoard */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/DashBoard/DashBoardTpl.ejs'],        
 		
		initialize: function() {
            this.render();
        },

        events: {
        },

        subscriptions: {
        },	

        render: function() {
		    this.$el.html(this.template());
			return this;
        }		
		 
	});

})(app.DashBoard);
