function undercover3(){
			  var d2 = document.getElementById("interets");
		   if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
	  }
		}




function windowOpen() { 
                Window = window.open("https://www.mixedmartialartist.fr/", 
                                 "_blank", "width=400, height=450"); 
            } 







function matroncheenphoto(){
    window = window.open("Snapchat-745012.jpg",
                   "_blank", "width=400, height=450"     );
}

















var string = "Je suis actuellement chargé grands comptes au sein de la société Chronopost, je souhaite changer de carrière afin de decouvrir de nouveaux horizons, ma récente passion pour la programmation informatique me donne envie de (re)découvrir les metiers liés aux web, c'est la raison pour laquelle j'envisage ma prochaine reconversion dans les métiers du digital.";
var cequejerecherche = string.split("");
var el = document.getElementById('cequejerecherche');
(function animate() {
cequejerecherche.length > 0 ? el.innerHTML += cequejerecherche.shift() : 
clearTimeout(running); 
var running = setTimeout(animate, 60);
})();