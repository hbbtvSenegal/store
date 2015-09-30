/*
*
*/

require.def("store/static/composants/bouton",
	[
		"antie/widgets/button",
		"antie/events/keyevent"
	],
	function(Button, KeyEvent){
		'use strict';
		
		return Button.extend({
			//constructeur
			init: function(id){
				var self = this;
				self._super(id);

				var keyRetour = new KeyEvent("retour", KeyEvent.VK_LEFT);

				this.addEventListener("keydown", function(evt){

				});

				this.addEventListener("beforerender", function(evt){
					self.bubbleEvent(keyRetour);
				});
			},
			//les evenements a ajouter
			_onBeforeRender: function(){

			}

		});
	}
);

