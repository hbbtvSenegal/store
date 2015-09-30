require.def("store/static/datasources/appsource",
		[
			"antie/class"
		], //classe dépendant de la classe antie/class
		function(Class){ 
			return Class.extend({ 
				loadData: function(callback){ 
					callback.onSuccess( 
							[ 
								{ 
									"id": "1", 
									"titre": "Video à la demande", 
									"img" : "static/image/vod.png",
									"fichier": "store/js/storehabillement",
									"lien" : "",
									"details" : "Video à la demande.<br> Retouvez de nombreux videos sur toutes les catégories"
								}, 
								{ 
									"id": "2", 
									"titre" : "Jeux video en ligne",
									"img" : "static/image/jeuxvideo.png",
									"fichier": "store/js/storegadget",
									"lien": "",
									"details" : "Jeux videos en ligne. Retoruvez tous nos jeux videos"
								}, 
								{ 
									"id": "3", 
									"titre" : "Achat en ligne",
									"img" : "static/image/achat.png",
									"fichier": "store/js/storevilla",
									"lien": "../siteDeVente/index.php",
									"details" : "Achat en ligne. Faites des achats en ligne plus facilement"
								},
								{ 
									"id": "4", 
									"titre": "Television sur internet", 
									"img" : "static/image/mouton1.png",
									"fichier": "store/js/storehabillement",
									"lien": "",
									"details" : "Regarder la télévision en ligne plus confortablement"
								}, 
								{ 
									"id": "5", 
									"titre" : "Horloge",
									"img" : "static/image/horloge.png",
									"fichier": "store/js/storegadget",
									"lien": "",
									"details" : "Tout sur les gadgets"
								}, 
								{ 
									"id": "6", 
									"titre" : "Cours en ligne",
									"img" : "static/image/cours.png",
									"fichier": "store/js/storevilla",
									"lien": "",
									"details" : "Cours en ligne. <br> Regarder tous les cours en ligne que vous voulez!"
								}
							] 
						) 
					}	 
				}); 
			} 
			 
		);