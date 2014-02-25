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
            'ScrumPageDefault:Open': 'renderDefaultTab'
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        },

        showPlan: function(project_id) {
            var ProductBacklogStory = new app.ProductBacklogStories.CollectionView({el: $(".content")}),
                SprintBacklogStory = new app.SprintBacklogStories.CollectionView({el: $(".content")});

            Backbone.Mediator.pub('ScrumPage:PlanBoardSelected', project_id);
        },

        showScrum: function() {
            Backbone.Mediator.pub('ScrumPage:ScrumBoardSelected');
        },

        showStat: function() {
            Backbone.Mediator.pub('ScrumPage:StatBoardSelected');
        },

        renderDefaultTab: function(project_id) {
            this.render();
            this.showPlan(project_id);
        }

    });


})(app.ScrumPage);
