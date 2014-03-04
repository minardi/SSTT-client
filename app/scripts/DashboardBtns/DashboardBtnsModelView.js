/* DashboardBtns */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "button",
        
        className: "btn btn-info",

        template: JST['app/scripts/DashboardBtns/DashboardBtnsTpl.ejs'],
        
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})(app.DashboardBtns);
