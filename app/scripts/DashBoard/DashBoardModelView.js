 /* DashBoard */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/DashBoard/DashBoardTpl.ejs'],        
 		
	    initialize: function() {            
        },

        attributes: {            
            class: 'btn btn-info',
            type: 'button'            
        },
        
        tagName: 'button',                    
        
        events: {
            "click .btn-team": "goToTeamList"
        },     

        subscriptions: {

        },	

        goToTeamList: function() {
           Backbone.Mediator.pub("ButtonTeamClick",this.model.toJSON().project_id);
        },

        render: function() {
            this.$el.html(this.template({
                context: this.model.toJSON().context
            }));	    
	        return this;
        }


		 
	});
})(app.DashBoard);
