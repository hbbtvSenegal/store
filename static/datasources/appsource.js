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
									"details" : "<div style='color:red;font-size:42px;text-align:center;'>Video à la demande.</div>Retouvez les plus belles vidéos à la demande."
								}, 
								{ 
									"id": "2", 
									"titre" : "Jeux video",
									"img" : "static/image/jeuxvideo.png",
									"fichier": "store/js/storegadget",
									"lien": "",
									"details" : "<div style='color:red;font-size:42px;text-align:center;'>Jeux videos en ligne.</div>Retrouvez tous nos jeux videos"
								}, 
								{ 
									"id": "3", 
									"titre" : "Achat en ligne",
									"img" : "static/image/achat.png",
									"fichier": "store/js/storevilla",
									"lien": "../siteDeVente/index.php",
									"details" : "<div style='color:red;font-size:42px;text-align:center;'>Achat en ligne</div>Faites des achats en ligne plus facilement"
								},
								{ 
									"id": "4", 
									"titre": "Television sur internet", 
									"img" : "static/image/tv.png",
									"fichier": "store/js/storehabillement",
									"lien": "",
									"details" : "<div style='color:red;font-size:42px;text-align:center;'>Télévision sur internet</div>Regarder plus de chaînes de télévvision"
								}, 
								{ 
									"id": "5", 
									"titre" : "Horloge",
									"img" : "static/image/horloge.png",
									"fichier": "store/js/storegadget",
									"lien": "",
									"details" : "<div style='color:red;font-size:42px;text-align:center;'>Gadgets</div>Regarder les plus jolis gadgets"
								}, 
								{ 
									"id": "6", 
									"titre" : "Cours en ligne",
									"img" : "static/image/cours.png",
									"fichier": "store/js/storevilla",
									"lien": "",
									"details" : "<div style='color:red;font-size:42px;text-align:center;'>Cours en ligne<div>Regarder tous les cours en ligne que vous voulez!"
								}, 
								{ 
									"id": "7", 
									"titre" : "Facebook",
									"img" : "static/image/facebook.png",
									"fichier": "store/js/storevilla",
									"lien": "",
									"details" : "<div style='color:red;font-size:42px;text-align:center;'>Cours en ligne<div>Regarder tous les cours en ligne que vous voulez!"
								}, 
								{ 
									"id": "8", 
									"titre" : "Google",
									"img" : "static/image/google.png",
									"fichier": "store/js/storevilla",
									"lien": "",
									"details" : "<div style='color:red;font-size:42px;text-align:center;'>Cours en ligne<div>Regarder tous les cours en ligne que vous voulez!"
								}
							] 
						) 
					}	 
				}); 
			} 
			 
		);