/* ScrumPage */

(function(module) {
    module.ModelView = Backbone.View.extend({

        template: JST["app/scripts/ScrumPage/ScrumPageTpl.ejs"],
		
        events: {
            "click #planning": "showPlanning",
            "click #scrumboard": "showScrum",
            "click #stat": "showStat"
        },

        subscriptions: {
            "Project:Selected": "renderDefaultTab",
            "ScrumPage:toProjectPage": "removeScrumPage"
        },
        
        renderDefaultTab: function(project_id) {
            this.model.set({id_of_project: project_id});
            this.render();
            this.element = this.$el.find("#ScrumPage"),
            this.showPlanning();
        },
        
        render: function() {
            this.$el.append(this.template());
            return this;
        },
		
        showPlanning: function() {
            this.element.html("");
            Backbone.Mediator.pub("ScrumPage:PlanningBoardSelected", this.element, this.model.get("id_of_project"));
        },

        showScrum: function() {
            Backbone.Mediator.pub("ScrumPage:ScrumBoardSelected", this.element);
        },

        showStat: function() {
            Backbone.Mediator.pub("ScrumPage:StatBoardSelected", this.element);
            Backbone.Mediator.pub("Edit:TeamBoardSelected", this.element, this.model.get("id_of_project"));
        },

        removeScrumPage: function() {
            this.$el.find(".scrum-page").remove();
            console.log("remove SCRUM");
        }


    });
})(app.ScrumPage);
