/* Projects */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box",        
        
        template: JST['app/scripts/Projects/ProjectsTpl.ejs'],        
        
        events: {
            "dblclick": "selectProject",
            "click": "getProjectInfo"
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        selectProject: function() {
            Backbone.Mediator.pub("ScrumPageDefault:Open", this.model.id);
        },//переименовать канал

        getProjectInfo: function() {
            Backbone.Mediator.pub("Projects:getInfo", this.model);   
        }

    });

})(app.Projects);
