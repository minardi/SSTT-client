/* DashBoard */

(function(module) {
        
    module.ModelView = Backbone.View.extend({

        tagName: "button",

        className: "btn btn-info",
        
        template: JST["app/scripts/DashBoard/DashBoardTpl.ejs"],

        events: {
            "click": "action"
        }, 
        
        glyph: {
            Back: "glyphicon glyphicon-arrow-left",
            Delete:  "glyphicon glyphicon-remove",
            Configure: "glyphicon glyphicon-cog"
        },  

        action: function() {
            Backbone.Mediator.pub("Button:Click:" + this.model.get("content"), this.model.get("project_id"));
        },

        render: function() {
            this.$el.html(this.template({
                content: this.model.get("content"),
                glyph: this.glyph[this.model.get("content")]
            }));
            return this;
        }

    });
})(app.DashBoard);
