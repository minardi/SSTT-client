/* ProductBacklogStories */

(function(module) {

        module.ModelView = Backbone.View.extend({

                tagName: "li",
                className: "",

                template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesTpl.ejs'],   

                initialize: function() {

                },

                events: {},

                subscriptions: {},

                render: function() {
                        this.$el.html(this.template(this.model.toJSON()));
                        return this;
                }

        });

})(app.ProductBacklogStories);