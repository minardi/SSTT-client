/* Teams */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box", 

        template: JST['app/scripts/Teams/TeamsTpl.ejs'],
        
        events: {
            //"dblclick": "selectTeam",
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        selectTeam: function() {
            Backbone.Mediator.pub("Team:Selected", this.model.id);
        },
        
    });

})(app.Teams);
