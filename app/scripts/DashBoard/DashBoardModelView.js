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
            //'#btn-team click': 'goToTeamList'
        },     
             
         
        subscriptions: {

        },	

        render: function() {    
            console.log(this.model.toJSON().project_id);                                                               
            this.$el.html(this.template({
                context: this.model.toJSON().context
            }));		    
	        return this;
        }		
		 
	});

})(app.DashBoard);
