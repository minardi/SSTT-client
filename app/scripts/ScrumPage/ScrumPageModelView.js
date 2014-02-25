/* ScrumPage */

(function(module) {
        
    module.ModelView = Backbone.View.extend({

        template: JST['app/scripts/ScrumPage/ScrumPageTpl.ejs'],

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
            this.showPlan(project_id);
        },

        render: function() {
            this.$el.append(this.template());
            return this;
        },

        showPlan: function(project_id) {
            //убрать var в мейн\
            //элемент передать через медиатор (саб)
            var ProductBacklogStory = new app.ProductBacklogStories.CollectionView({el: $(".content")}),
                SprintBacklogStory = new app.SprintBacklogStories.CollectionView({el: $(".content")});

            Backbone.Mediator.pub('ScrumPage:PlanBoardSelected', project_id);
        },

        showScrum: function() {
            Backbone.Mediator.pub('ScrumPage:ScrumBoardSelected', $('#tab-scrum'));
        },

        showStat: function() {
            Backbone.Mediator.pub('ScrumPage:StatBoardSelected', $('#tab-stat'));
        }

    });

})(app.ScrumPage);
