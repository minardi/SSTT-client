/* DashBoard */

(function(module, sstt) {
        
    module.CollectionView = Backbone.View.extend({

        project: {},

        current_page: "project_page",

        template: JST["app/scripts/DashBoard/DashBoardCollectionTpl.ejs"],
        
        initialize: function() {
            this.collection = new module.Collection();
            this.collection.add([
                {
                    content: "Back",
                    glyph: "glyphicon glyphicon-arrow-left",
                    provision: {
                        "must_be": "",
                        "not": {
                            page: ["project_page", "team_edit_page"]
                        }
                    }
                },

                {
                    content: "BackFromTeamEditPage", 
                    glyph: "glyphicon glyphicon-arrow-left",
                    provision: {
                        "must_be": {
                            page: ["team_edit_page"]
                        },
                        "not": ""
                    }
                },

                {
                    content: "Team",
                    provision: {
                        "must_be": {
                            right: ["pm"]
                        },
                        "not": {
                            page: ["team_page", "team_edit_page"]
                        }
                    }
                },

                {
                    content: "Configure",
                    glyph: "glyphicon glyphicon-arrow-cog",
                    provision: {
                        "must_be": {
                            right: ["pm"]
                        },
                        "not": ""
                    }
                },

                {
                    content: "Delete",
                    glyph: "glyphicon glyphicon-arrow-remove",
                    provision: {
                        "must_be": {
                            right: ["pm"]
                        },
                        "not": ""
                    }
                } 
            ])
        },

        subscriptions: {
            "Project:Checked": "setProject",
            "Button:Click:Back": "toProjectPage",
            "Project:Selected": "toScrumPage",
            "Button:Click:Team": "toTeamPage",
            "Team:Selected": "toTeamEditPage",
            "Button:Click:BackFromTeamEditPage": "toTeamPage",
        },

        toProjectPage: function() {
            this.$el.find(".dashboard").remove();
            this.current_page = "project_page";
            this.render();
        },

        toScrumPage: function() {
            this.$el.find(".dashboard").remove();
            this.current_page = "scrum_page";
            this.render();
        },

        toTeamPage: function() {
            this.$el.find(".dashboard").remove();
            this.current_page = "team_page";
            this.render();
        },

        toTeamEditPage: function() {
            this.$el.find(".dashboard").remove();
            this.current_page = "team_edit_page";
            this.render();
        },

        setProject: function(project) {
            this.$el.find(".dashboard").remove();
            this.project = project;
            this.render();
        },

        render: function(project) {
            this.current_right = (this.project.get("pm").user_id == sstt.user.getId())? "pm": "not_pm";
            this.$el.append(this.template);
            this.collection.each(this.renderOne, this);
            return this;
        },

        renderOne: function (button_model) {
            button_model.set("project_id", this.project.id);
            if (this.canRender(button_model.get("provision"))) {
                var button = new module.ModelView({
                        model: button_model
                    });

                this.$el.find(".dashboard").append(button.render().el);
            };
        },

        canRender: function (provision) {
            var answer = true;

            if (provision.must_be.right) {
                _.each(provision.must_be.right, function(el) {
                                                    if (el !== this.current_right) {
                                                        answer = false;
                                                    }
                                                }
                , this)
            }

            if (provision.must_be.page) {
                _.each(provision.must_be.page, function(el) {
                                                    if (el !== this.current_page) {
                                                        answer = false;
                                                    }
                                                }
                , this)
            }

            if (provision.not.page) {
                _.each(provision.not.right, function(el) {
                                                    if (el === this.current_rigth) {
                                                        answer = false;
                                                    }
                                                }
                , this)
            }

            if (provision.not.page) {
                _.each(provision.not.page, function(el) {
                                                    if (el === this.current_page) {
                                                        answer = false;
                                                    }
                                                }
                , this)
            }

            return answer;
        }

    });

})(app.DashBoard, sstt);