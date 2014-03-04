/* UserCandidates */

(function(module) {
        
    module.ModelView = Backbone.View.extend({        
        
        template: JST['app/scripts/UserCandidates/UserCandidatesTpl.ejs'],        

        model: module.Model,

        tagName: "div",

        className: "user-box",
        
        events: {
           "click" : "addToProject"
        },

        render: function() {
           this.$el.html(this.template(this.model.toJSON()));
           return this;
        },

        addToProject: function() {
            this.model.set("role","watcher")
            this.render(this.model);

            Backbone.Mediator.pub("User:addToProject", this.model);
            console.log(this.model.get("first_name"));

        },  
         
    });

})(app.UserCandidates);
