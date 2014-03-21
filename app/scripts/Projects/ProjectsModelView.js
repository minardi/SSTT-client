/* Projects */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box",
        
        template: JST['app/scripts/Projects/ProjectsTpl.ejs'],
        
        events: {
            "dblclick": "selectProject",
            "click": "showProjectInfo"
        },

        selectProject: function() {
            mediator.pub("ProjectPage:ProjectSelected", this.model.id);           
            mediator.pub("ProjectPage:ProjectSelectedRole", this.model.get("role"));
        },
        
        showProjectInfo: function() {
            mediator.pub("ProjectPage:ProjectChecked", this.model.id);
            this.$el.siblings().removeClass("active-tab");
            this.$el.addClass("active-tab"); 
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
        
    });

})(app.Projects);
