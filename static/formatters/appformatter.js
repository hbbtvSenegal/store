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
				var image = new Image("img-id-app", item.img, {width:200, height:200});
				bouton.appendChildWidget(image); 
				var titre = new Label(item.titre);
				 
				//console.log(item.titre);

				bouton.addEventListener("select", function(evt){
					document.location.href=item.lien;
				});

				bouton.addEventListener("focus", function(evt){
                    bouton.addClass("appFocus");
                   // image.addClass("imageAppFocus");
                  	self._componentTexte.texte.setText(item.details);
                  	bouton.appendChildWidget(titre);

                });

                bouton.addEventListener("blur", function(evt){
                    bouton.removeClass("appFocus");
                  //  image.removeClass("imageFocus");
                  	bouton.removeChildWidget(titre);
                });

				return bouton;
			}
		}); 
	} 
);