/* ProductBacklogStories */

(function(module) {

    module.ModelView = Backbone.View.extend({

        model: module.Model,

        tagName: "div",

        className: "story-box",

        template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesTpl.ejs'],

        events: {
            "dblclick" : "moveToSprintstory"
        },

        subscriptions: {},

        render: function() {
            //this.$el.html(this.template({name:this.model.toJSON().title}));
            this.$el.html(this.template({name:this.model.get("title")}));
            return this;
        },

        moveToSprintstory: function() {
            Backbone.Mediator.pub("Story:moveToSprint", this.model);
            this.$el.remove();
        }

    });

})(app.ProductBacklogStories);