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

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        selectProject: function() {
            mediator.pub("Project:Selected", this.model.id);
        },
        
        getProjectInfo: function() {
            mediator.pub("Project:Checked", this.model);  
            $(".box").removeClass("active-tab"); 
            this.$el.addClass("active-tab"); 
        }

    });

})(app.Projects);
