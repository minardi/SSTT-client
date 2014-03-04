 /* DashBoard */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/DashBoard/DashBoardTpl.ejs'],     
 		    
        attributes: {            
            class: 'btn btn-info',
            type: 'button'            
        },
        
        tagName: 'button',                    
        
        events: {
            "click": "goToTeamList"
        }, 
        
        glyph: {
            Back: 'glyphicon glyphicon-remove',
            Delete: 'glyphicon glyphicon-arrow-left', 
            Configure: 'glyphicon glyphicon-cog'
        },  
               
        goToTeamList: function() {
            Backbone.Mediator.pub("Button:Click:" + this.model.get("context"), this.model.get("project_id"));
        },       

        render: function() {
            this.$el.html(this.template({
                context: this.model.get('context'), 
                glyph: this.glyph[this.model.get('context')]
            }));	    
	        return this;
        }		 
	});
})(app.DashBoard);
