/* ScrumPage */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	     
		
    template: JST['app/scripts/ScrumPage/ScrumPageTpl.ejs'],        
 		
	//template: _.template($('#scrum-board').html()),
	
	initialize: function() {
		this.render();
		this.showPlan();
	},
	
	events: {
		'click #planning': 'showPlan',
		'click #scrumboard': 'showScrum',
		'click #stat': 'showStat'
	},
	
	subscriptions: {
		//'some_channel': 'render';
	},
	
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	
	showPlan: function() {
		var ProductBacklogStory = new app.ProductBacklogStory.CollectionView({el: $(".content")});
		var SprintBacklogStory = new app.SprintBacklogStory.CollectionView({el: $(".content")});
		Backbone.Mediator.publish('ScrumPage:PlanBoardSelected', $('#tab-plan'));
	},
	
	showScrum: function() {
		Backbone.Mediator.publish('ScrumPage:ScrumBoardSelected', $('#tab-scrum'));
	},
	
	showStat: function() {
		Backbone.Mediator.publish('ScrumPage:StatBoardSelected', $('#tab-stat'));
	}
		 
	});

})(app.ScrumPage);
