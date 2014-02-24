/* SprintBacklogStories */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/SprintBacklogStories/SprintBacklogStoriesCollectionTpl.ejs'],  

        initialize: function() {
            this.collection = new module.Collection();
        },

        events: {
        },

        subscriptions: {
            "Story:moveToSprint" : "moveToSprintstory",
            "ScrumPage:PlanBoardSelected" : "choosePlanningBoard"
        },

        choosePlanningBoard: function() {
            this.render();
        },

        render: function() {
            this.$el.append(this.template());
            return this;
        },

        renderOne: function(story_model) {
            var story = new module.ModelView({model: story_model});
            this.$el.find(".sprint.backlog-box table").append(story.render().el);
            return this;
        },

        moveToSprintstory: function(product_story_model) {
            this.collection.add(product_story_model.toJSON());
            this.renderOne(product_story_model);
        }

    });

})(app.SprintBacklogStories);

