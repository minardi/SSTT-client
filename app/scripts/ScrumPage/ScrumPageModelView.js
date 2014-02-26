/* ScrumPage */

(function(module) {
        
    module.ModelView = Backbone.View.extend({

        project_id: "",

        template: JST["app/scripts/ScrumPage/ScrumPageTpl.ejs"],
        
        events: {
            "click #planning": "showPlanning",
            "click #scrumboard": "showScrum",
            "click #stat": "showStat"
        },

        subscriptions: {
            "Project:Selected": "renderDefaultTab"
        },
        
        renderDefaultTab: function(project_id) {
            this.project_id = project_id;
            this.render();
            this.showPlanning();
        },
        
        render: function() {
            this.$el.append(this.template());
            return this;
        },
        
        showPlanning: function() {
            this.$el.find("#ScrumPage").html("");
            Backbone.Mediator.pub("ScrumPage:PlanningBoardSelected", this.$el.find("#ScrumPage"), this.project_id);
        },

        showScrum: function() {
            Backbone.Mediator.pub("ScrumPage:ScrumBoardSelected", $("#ScrumPage"));
        },

        showStat: function() {
            Backbone.Mediator.pub("ScrumPage:StatBoardSelected", $("#ScrumPage"));
        }
        
    });

})(app.ScrumPage);
