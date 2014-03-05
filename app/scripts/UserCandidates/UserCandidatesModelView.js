/* UserCandidates */

(function(module) {

  module.ModelView = Backbone.View.extend({

          template: JST['app/scripts/UserCandidates/UserCandidatesTpl.ejs'],        

          model: module.Model,
          tagName: "div",
          className: "user-box",

          initialize: function() {
            this.model.on('change', this.render, this);
          },

           events: {
             "click" : "addToProject"
           },

           render: function() {
             this.$el.html(this.template(this.model.toJSON()));
             return this;
            },

            addToProject: function() {
              this.model.set("role", "some")
              //this.render(this.model);

              Backbone.Mediator.pub("UserCandidate:addToProject", this.model);
              console.log(this.model.get("first_name"));
            }   
     
  });

})(app.UserCandidates);
