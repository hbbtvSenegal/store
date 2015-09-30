require.def("store/static/formatters/appformatter", 
	[ 
		"antie/formatter", 
		"antie/widgets/button", 
		"antie/widgets/label", 
		"antie/widgets/image" 
	], 
	function(Formatter, Button, Label, Image){ 
		"use strict";
		return Formatter.extend({ 


			init: function(application, details){
                this._super();
                this._application = application;
                this._device = this._application.getDevice();

                this._componentTexte = details;
                var self = this;
            },

			format: function(iterateur){
				var self = this;

				var item = iterateur.next();

				var bouton  = new Button("appBouton"+item.id);
				bouton.addClass("appBouton");
				var image = new Image("img-id-app", item.img, {width:100, height:100});
				bouton.appendChildWidget(image); 
				bouton.appendChildWidget(new Label("Voir")); 

				bouton.addEventListener("select", function(evt){
					document.location.href=item.lien;
				});


				return bouton;
			}
		}); 
	} 
);