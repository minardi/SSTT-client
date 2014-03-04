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
            "click": "goToTeamList"
        }, 
        
        glyph: {
            back: 'glyphicon glyphicon-remove',
            del: 'glyphicon glyphicon-arrow-left', 
            config: 'glyphicon glyphicon-cog'
        },    
        
        subscriptions: {            
        },	

        goToTeamList: function() {
            Backbone.Mediator.pub("Button:Click:" + this.model.get("context"), this.model.get("project_id"));
        },       

        render: function() {
            this.$el.html(this.template({
                context: this.model.toJSON().context, 
                glyph: this.glyph[this.model.toJSON().context]
            }));	    
	        return this;
        }


		 
	});
})(app.DashBoard);
