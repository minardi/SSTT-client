/* TeamMembers */

(function(module) {
        
    module.ModelView = Backbone.View.extend({
        
       className: "team_members-box",
    
        model: new module.Model(),
        
        template: JST['app/scripts/TeamMembers/TeamMembersTpl.ejs'],

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }       
         
    });

})(app.TeamMembers);
