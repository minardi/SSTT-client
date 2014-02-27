/* TeamEditPage */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
 		
        template: JST['app/scripts/TeamEditPage/TeamEditPageTpl.ejs'],        
 	       
        events: {
            "click #watchers": "showWatchers",
            "click #developers": "showDevelopers",
            "click #TeachLeads": "showTeachLeads"
        },          

        subscriptions: {            
        },	

        render: function() {
            console.log('render');
            this.$el.append(this.template);
	    return this;
        },

        showWatchers: function () {            
            Backbone.Mediator.pub("TeamEditPage:WatchersBoardSelected", this.element);
        },
        
        showDevelopers: function () {            
            Backbone.Mediator.pub("TeamEditPage:DevelopersBoardSelected", this.element);
        },

        showTeachLeads: function () {
            Backbone.Mediator.pub("TeamEditPage:TeachLeadsBoardSelected", this.element);
        }

		 
    });

})(app.TeamEditPage);
