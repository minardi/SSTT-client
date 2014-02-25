/* Projects */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box",        
        
        template: JST['app/scripts/Projects/ProjectsTpl.ejs'],        
        
        events: {
            "dblclick": "selectProject"
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        selectProject: function() {
            Backbone.Mediator.pub("ScrumPageDefault:Open", this.model.id);
        }//переименовать канал

     
    });

})(app.Projects);
