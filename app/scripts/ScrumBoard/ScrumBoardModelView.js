/* ScrumBoard */

(function (module) {

    module.ModelView = Backbone.View.extend({

        template: JST['app/scripts/ScrumBoard/ScrumBoardTpl.ejs'],

        tagName: 'div',

        className: 'task',

        render: function () {           
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });
})(app.ScrumBoard);
