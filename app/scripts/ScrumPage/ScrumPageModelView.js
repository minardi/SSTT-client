/* ScrumPage */

(function(module) {
        

    module.ModelView = Backbone.View.extend({

        template: JST['app/scripts/ScrumPage/ScrumPageTpl.ejs'],
        
        /*initialize: function() {
            Backbone.Mediator.pub('ScrumPage:ProjectSelected', project_id);
        },
        */
        events: {
            'click #planning': 'showPlan',
            'click #scrumboard': 'showScrum',
            'click #stat': 'showStat'
        },

        subscriptions: {
            'ScrumPageDefault:Open': 'renderDefaultTab'
        },
        
        renderDefaultTab: function(project_id) {
            this.render();
            Backbone.Mediator.pub('ScrumPage:ProjectSelected', project_id);
        },
        
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        
        showPlan: function() {
            Backbone.Mediator.pub('ScrumPage:PlanBoardSelected', $(".content"));
        },

        showScrum: function() {
            Backbone.Mediator.pub('ScrumPage:ScrumBoardSelected', $(".content"));
        },

        showStat: function() {
            Backbone.Mediator.pub('ScrumPage:StatBoardSelected', $(".content"));
        }
    });
})(app.ScrumPage);
