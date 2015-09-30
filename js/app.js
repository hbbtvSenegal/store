require.def("store/js/app", 
	[ 
		"antie/widgets/component", 
		"store/static/composants/bouton", 
		"antie/widgets/container", 
		"antie/widgets/verticallist", 
		"antie/widgets/horizontallist", 
		"antie/widgets/label",
		"store/static/composants/carouselhorizontal",
		"antie/datasource",
		"store/static/datasources/appsource",
		"store/static/formatters/appformatter",
		"store/static/composants/texte"
	], 
	function(Component,
		Bouton, 
		Container,
		VerticalList,
		HorizontalList, 
		Label, 
		HorizontalCarousel, 
		DataSource, 
		AppSource, 
		AppFormatter,
		Texte
		){ 
		return Component.extend({ 
			init: function(){ 
			var self = this; 
			this._super("store"); 

			//l'application
			this._application = this.getCurrentApplication();
			this._device = this._application.getDevice();


			var texte = new Texte();
			texte.setText("Bienvenue dans le store de TNT.<br> Appuyer sur ENTRER pour voir le store");

		//	this.appendChildWidget(texte);
			var bouton  = new Bouton();
			bouton.appendChildWidget(texte);
			this.appendChildWidget(bouton);
			this.addEventListener("select", function(evt){
			//	console.log(evt.keyCode);
				self._application.pushComponent("maincontainer", "store/js/accueil");

			});

			}
		}); 
	} 
); 

