/* DashBoard */

(function(module) {
        
    module.ModelView = Backbone.View.extend({
        
        template: JST["app/scripts/DashBoard/DashBoardTpl.ejs"],

        tempate_btn_back: JST["app/scripts/DashBoard/DashBtnBack.ejs"],
        
        initialize: function() {
            this.render();
        },

        events: {
        },

        subscriptions: {
            "Project:Selected": "showBtnBack"
        },  

        render: function() {
            this.$el.append(this.template());
            return this;
        },

        showBtnBack: function() {
            this.$el.append(this.tempate_btn_back());
            $("#btn-back").on("click", function() {
                $("#btn-back").remove();
                Backbone.Mediator.pub("ScrumPage:toProjectPage");
            })
        }
     
    });

})(app.DashBoard);
