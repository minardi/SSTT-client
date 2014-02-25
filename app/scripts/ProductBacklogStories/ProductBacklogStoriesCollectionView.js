/* ProductBacklogStories */

(function(module) {

    module.CollectionView = Backbone.View.extend({
      
        template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesCollectionTpl.ejs'],

        subscriptions: {
            "ScrumPage:PlanBoardSelected" : "initPlanBoard"
        },

        initPlanBoard: function(project_id) {
            this.$el.append(this.template());
            this.collection = new module.Collection(project_id),
            this.collection.on('sync', this.render, this);
        },

        render: function() {
           this.collection.each(this.renderOne, this);
           return this;
        },

        renderOne: function(StoryModel) {
            var story = new module.ModelView({
                    model: StoryModel
            });

            this.$el.find(".backlog-box ul").append(story.render().el);
        }

    });

})(app.ProductBacklogStories);