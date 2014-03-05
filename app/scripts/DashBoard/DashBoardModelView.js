 /* DashBoard */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
		
        template: JST["app/scripts/DashBoard/DashBoardTpl.ejs"],     
 		    
        attributes: {            
            class: "btn btn-info",
            type: "button"            
        },
        
        tagName: "button",                    
        
        events: {
            "click": "action"
        }, 
        
        glyph: {
            Back: "glyphicon glyphicon-arrow-left",
            Delete:  "glyphicon glyphicon-remove",
            Configure: "glyphicon glyphicon-cog"
        },  
               
        action: function() {
            Backbone.Mediator.pub("Button:Click:" + this.model.get("context"), this.model.get("project_id"));
        },       

        render: function() {
            this.$el.html(this.template({
                context: this.model.get("context"), 
                glyph: this.glyph[this.model.get("context")]
            }));	    
	        return this;
        }		 
	});
})(app.DashBoard);
