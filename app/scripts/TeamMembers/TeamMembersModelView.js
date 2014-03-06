/* TeamMembers */

(function(module) {

        module.ModelView = Backbone.View.extend({              
             
        //model: new module.Model(),
        initialize: function () {
            this.model.on('change', this.render, this);
        },

        template: JST['app/scripts/TeamMembers/TeamMembersTpl.ejs'],
      
        render: function(selected_role) {
        	if ((!selected_role) || (this.model.get('role') === selected_role)) {

            	this.$el.html(this.template(this.model.toJSON()));	
            } else {
            	this.$el.html(this.template(new module.Model().toJSON()));
            }
            return this;
        }       
         
    });

})(app.TeamMembers);
