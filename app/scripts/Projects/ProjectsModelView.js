/* Projects */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box",        
        
        template: JST['app/scripts/Projects/ProjectsTpl.ejs'],        
        
        events: {
            "dblclick": "selectProject",
            "click": "getProjectInfo",
        },

        selectProject: function() {
            mediator.pub("ProjectPage:ProjectSelected", this.model.id);
        },
        
        getProjectInfo: function() {
            mediator.pub("Project:Checked", this.model);  
            $(".box").removeClass("active-tab"); 
            this.$el.addClass("active-tab"); 
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})(app.Projects);
