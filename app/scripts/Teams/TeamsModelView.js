/* Teams */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box", 

        template: JST['app/scripts/Teams/TeamsTpl.ejs'],
        
        events: {
            "dblclick": "selectTeam",
        },

        selectTeam: function() {
            mediator.pub("Team:Selected", this.model.id);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})(app.Teams);
