/* TeamMembers */

(function(module) {

        module.ModelView = Backbone.View.extend({              

        initialize: function () {
            this.model.on('change', this.show, this);
        },

        template: JST['app/scripts/TeamMembers/TeamMembersTpl.ejs'],
        
        subscriptions: {
            "TeamTab:Selected": "setMode"
        },

        mode: "watcher",

        canRender: function() {
         return (this.model.get("role") === this.mode);  
        },

        show: function() {
            if (this.canRender()) {
               this.$el.show();  
            } else {
               this.$el.hide();   
            }
        },

        render: function() {
          this.$el.html(this.template(this.model.toJSON())); 
          this.show();   
          return this;
        },

        setMode: function(new_mode) {
            this.mode = new_mode;
            this.show();
        }  
         
    });

})(app.TeamMembers);
