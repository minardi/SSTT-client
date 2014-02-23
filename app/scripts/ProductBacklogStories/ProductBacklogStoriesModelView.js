/* ProductBacklogStories */

(function(module) {

        module.ModelView = Backbone.View.extend({
		
	            model: module.Model,
                tagName: "li",
                className: "",

                template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesTpl.ejs'],   

                initialize: function() {

                },

                events: {
			      "click" : "moveToSprintstory"
				},

                subscriptions: {},

                render: function() {
                      this.$el.html(this.template({name:this.model.toJSON().title}));
                      return this;
                },
	
			moveToSprintstory: function() {
			  Backbone.Mediator.pub("ProductBacklogStory:moveProductstoryToSprintstory", this.model);
			  this.$el.remove();
			  this.model.destroy();	
			}	

        });

})(app.ProductBacklogStories);