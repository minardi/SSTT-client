/* User */

(function(module) {
        
        module.ModelView = Backbone.View.extend({            
      
        template: JST['app/scripts/User/UserTpl.ejs'],

        model: new module.Model(),        
                
        initialize: function() {
            this.model.on('sync', this.render, this);
            this.model.on('sync', function() {
                Backbone.Mediator.pub("!user_load");
            }, this);
        },

        events: {
        },

        subscriptions: {
        },      

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            console.log("render ", this.model.toJSON());
            return this;
        },

        getId: function() {
            return this.model.get("id");
        }               
                 
        });

})(app.User);

