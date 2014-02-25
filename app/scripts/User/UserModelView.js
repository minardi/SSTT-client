/* User */

(function(module) {
        
    module.ModelView = Backbone.View.extend({            
  
        template: JST['app/scripts/User/UserTpl.ejs'],
         
        initialize: function() {
            this.model = new module.Model();
            this.model.on('sync', this.render, this);
            
            this.model.on('sync', function() {
                Backbone.Mediator.pub("!user_load");
            }, this);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        getId: function() {
            return this.model.get("id");
        }               
             
    });

})(app.User);

