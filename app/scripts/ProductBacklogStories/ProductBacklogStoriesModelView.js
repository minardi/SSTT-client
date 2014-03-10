/* ProductBacklogStories */

(function(module) {

    module.ModelView = Backbone.View.extend({

        model: module.Model,

        tagName: "div",

        className: "story-box",

        template: JST['app/scripts/ProductBacklogStories/ProductBacklogStoriesTpl.ejs'],

        events: {
        //    "dblclick" : "moveToSprintstory"
        },

        subscriptions: {},

        render: function() {
            this.$el.html(this.template({name:this.model.get("title")}));
            return this;
        },

        moveToSprintstory: function() {
            mediator.pub("Story:moveToSprint", this.model);
            this.$el.remove();
        }

    });

})(app.ProductBacklogStories);