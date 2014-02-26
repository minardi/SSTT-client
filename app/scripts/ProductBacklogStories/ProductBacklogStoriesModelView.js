/* ProductBacklogStories */

(function(module) {

    module.ModelView = Backbone.View.extend({

        model: module.Model,
        tagName: "div",
        className: "story-box",

        template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesTpl.ejs'],

        events: {
        "click" : "moveToSprintstory"
        },

        subscriptions: {},

        render: function() {
        this.$el.html(this.template({name:this.model.toJSON().title}));
        return this;
        },

        moveToSprintstory: function() {
        Backbone.Mediator.pub("Story:moveToSprint", this.model);
        this.$el.remove();
    }

    });

})(app.ProductBacklogStories);