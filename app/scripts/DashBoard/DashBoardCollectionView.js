/* DashBoard */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({

        template: JST["app/scripts/DashBoard/DashBoardCollectionTpl.ejs"],
        
        initialize: function() {
            this.collection = new module.Collection();
        },

        subscriptions: {
            "ProjectInfo:Checked": "setProject",
            "DashBoard:ActiveBack": "toProjectPage",
            "ProjectPage:ProjectSelected": "toScrumPage",
            "DashBoard:ActiveTeam": "toTeamPage",
            "TeamPage:TeamSelected": "toTeamEditPage",
            "DashBoard:ActiveBackFromTeamEditPage": "toTeamPage",
        },

        setProject: function(info) {
            this.current_right = info.right;
            this.current_project_id = info.id;
            this.current_page = "project_page";
            this.render();
        },

        toProjectPage: function() {
            this.current_page = "project_page";
            this.render();
        },

        toScrumPage: function() {
            this.current_page = "scrum_page";
            this.render();
        },

        toTeamPage: function() {
            this.current_page = "team_page";
            this.render();
        },

        toTeamEditPage: function() {
            this.current_page = "team_edit_page";
            this.render();
        },

        render: function() {
            this.$el.find(".dashboard").remove();
            this.$el.append(this.template);
            this.collection.each(this.renderOne, this);
            return this;
        },

        renderOne: function (btn_model) {
            btn_model.set("project_id", this.current_project_id);
            if (this.canRender(btn_model.get("permition"))) {
                var btn = new module.ModelView({
                        model: btn_model,
                        className: btn_model.get("glyph")
                });
                this.$el.find(".dashboard").append(btn.render().el);
            };
        },

        canRender: function (permition) {
            var answer = true;

            if (permition.must_be.right) {
                _.each(permition.must_be.right, function(el) {
                        if (el !== this.current_right) {
                            answer = false;
                        }
                    }
                , this)
            }

            if (permition.must_be.page) {
                _.each(permition.must_be.page, function(el) {
                        if (el !== this.current_page) {
                            answer = false;
                        }
                    }
                , this)
            }

            if (permition.not.page) {
                _.each(permition.not.right, function(el) {
                        if (el === this.current_right) {
                            answer = false;
                        }
                    }
                , this)
            }

            if (permition.not.page) {
                _.each(permition.not.page, function(el) {
                        if (el === this.current_page) {
                            answer = false;
                        }
                    }
                , this)
            }

            return answer;
        }

    });

})(app.DashBoard);