 require.def('store/init', //chemin vers initialise.js 
    [ 
	//dependances 
       	 'antie/application', 
        'antie/widgets/container' 
    ], 
    function(Application, Container) { 

        return Application.extend({ 
            init: function(appDiv, styleDir, imgDir, callback) {  //constructeur 
                var self; 
                self = this; 
                self._super(appDiv, styleDir, imgDir, callback); 
	//modifier le widget racine (de type container) principale de l'application 
                self._setRootContainer = function() { 
                    var container = new Container(); //creer un conteneur principale 
                    container.outputElement = appDiv; //balise html app 
                    self.setRootWidget(container); //widget racine 
                }; 
            }, 
	
            run: function() { 
                this._setRootContainer(); 
                // créer un conteneur principale dans le conteneur racine et y ajouter un composant simple (ce module sera la base de notre application) 
                this.addComponentContainer("maincontainer", "store/js/app"); 
	// ''maincontainer'' est l'id du conteneur principale ajouté 
            } 
        });     
    } 
); 
