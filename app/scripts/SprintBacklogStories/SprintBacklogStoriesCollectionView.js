/* SprintBacklogStories */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/SprintBacklogStories/SprintBacklogStoriesCollectionTpl.ejs'],  

        subscriptions: {
            "Story:moveToSprint": "addStory",
        },
        
        initialize: function() {
            this.collection = new module.Collection();
            Backbone.Mediator.sub("ScrumPage:PlanningBoardSelected", this.initSprintBacklog, this);
        },

        initSprintBacklog: function(el_content) {
            this.setElement(el_content);
            this.render();
        },

        render: function() {
            this.$el.append(this.template());
            return this;
        },

        renderOne: function(story_model) {
            var story = new module.ModelView({model: story_model});

            this.$el.find(".sprint .story-list").append(story.render().el);
            return this;
        },

        addStory: function(product_story_model) {
            this.collection.add(product_story_model.toJSON());
            this.renderOne(product_story_model);
        }

    });

})(app.SprintBacklogStories);

