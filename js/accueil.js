require.def("store/js/accueil", 
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
			this._super("appstore"); 

			//l'application
			this._application = this.getCurrentApplication();
			this._device = this._application.getDevice();


			//les details du categorie dans un component
			this._componentDetails = new Component("componentDetails");
			this._componentDetails.addClass("itemMenuApp");
			this._componentDetails.texte = new Texte("detailsCategoriesApp");
			this._componentDetails.appendChildWidget(this._componentDetails.texte);
			
			//les categories dans un carousel
			this._Appsource = new DataSource(this, new AppSource(), "loadData");
			this._Appformatter = new AppFormatter(this._application, this._componentDetails);

			var carousel = new HorizontalCarousel("carouselApps", this._Appformatter, this._Appsource);
			carousel.addClass("itemMenuApp");

			//le menu de la page
			var menu = new VerticalList("menuapp");
			menu.appendChildWidget(this._componentDetails);
			menu.appendChildWidget(carousel);
			self.appendChildWidget(menu);
			
			this.addEventListener("keydown", function(evt){
			//	if(evt.keyCode===2)
			});

			},

			//configuration de la carousel
            _getCarouselConfig: function (idd, datasource, formatter) {
                return {
                    id: idd,
                    description: "Carousel example, LEFT and RIGHT to navigate, SELECT to go back",
                    dataSource: new DataSource(null, datasource, 'loadData'),
                    formatter: formatter,
                    orientation: Carousel.orientations.HORIZONTAL,
                    carouselId: 'verticalCullingCarousel',
                    animOptions: {
                        skipAnim: false
                    },
                    alignment: {
                        normalisedAlignPoint: 0.5,
                        normalisedWidgetAlignPoint: 0.5
                    },
                    initialItem: 4,
                    type: "CULLING",
                    lengths: 264
                };
            }
		}); 
	} 
); 

