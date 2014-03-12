/* TeamMembers */

(function(module) {

    module.ModelView = Backbone.View.extend({

        className: "user-box",
        
        template: JST['app/scripts/TeamMembers/TeamMembersTpl.ejs'],
        
        initialize: function() {
            this.model.on('change', this.show, this);
            this.show();
        },
       
        show: function() {
            return (this.canRender()) ? this.$el.show() : this.$el.hide();
        },
        
        canRender: function() {
            return (this.model.get("role") === this.mode);  
        },
        
        subscriptions: {
            "TeamTab:Selected": "setMode"
        },
        
        setMode: function(new_mode) {
            this.mode = new_mode;
            this.show();
        },

        canRender: function() {
            return (this.model.get("role") === this.mode);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.show();
            return this;
        }

    });

})(app.TeamMembers);
