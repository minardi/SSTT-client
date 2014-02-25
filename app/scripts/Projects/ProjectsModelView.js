/* Projects */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box",        
        
        template: JST['app/scripts/Projects/ProjectsTpl.ejs'],        
        
        initialize: function() {
        },

        events: {
		  "click":"pubChoosenProjectId"
        },

        subscriptions: {
        },  

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
		
		pubChoosenProjectId: function() {
			$(".content").html("");
			Backbone.Mediator.pub("ScrumPage:PlanBoardSelected", this.model.id)
        }
     
    });

})(app.Projects);
