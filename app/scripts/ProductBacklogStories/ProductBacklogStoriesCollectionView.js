/* ProductBacklogStories */

(function(module) {

        module.CollectionView = Backbone.View.extend({
                stories: [{
                        name: "st1",
                        description: "n/a"
                }, {
                        name: "st2",
                        description: "n/a"
                }, {
                        name: "st3",
                        description: "n/a"
                }, {
                        name: "st4",
                        description: "n/a"

                }, {
                        name: "st44",
                        description: "n/a"
                }, {
                        name: "st45",
                        description: "n/a"
                }, {
                        name: "st66",
                        description: "n/a"
                }, {
                        name: "st77",
                        description: "n/a"

                }],

                template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesCollectionTpl.ejs'],

                initialize: function() {
                        this.storyCollection = new module.Collection(this.stories);
                        this.render();
                        return this;
                },

                events: {},

                subscriptions: {},

                render: function() {
                        console.log(this.$el);
                        this.$el.html(this.template());
                        this.storyCollection.each(this.renderOne, this);
                        return this;
                },

                renderOne: function(StoryModel) {
                        var story = new module.ModelView({
                                model: StoryModel
                        });
                        this.$el.find("ul").append(story.render().el);
                }

        });

})(app.ProductBacklogStories);