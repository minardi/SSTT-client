/* ScrumPage */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
    template: JST['app/scripts/ScrumPage/ScrumPageTpl.ejs'],        
	
	initialize: function() {
	
	},
	
	events: {
		'click #planning': 'showPlan',
		'click #scrumboard': 'showScrum',
		'click #stat': 'showStat'
	},
	
	subscriptions: {
		"ScrumPageDefault:Open" : "render"
	},
	
	render: function() {
		this.$el.html(this.template());
		this.showPlan($('#my_content'));
		return this;
	},
	
	showPlan: function(element) {
		Backbone.Mediator.publish('ScrumPage:PlanBoardSelected', element);
	},
	
	showScrum: function() {
		Backbone.Mediator.publish('ScrumPage:ScrumBoardSelected', element);
	},
	
	showStat: function() {
		Backbone.Mediator.publish('ScrumPage:StatBoardSelected', element);
	}
		 
	});

})(app.ScrumPage);
