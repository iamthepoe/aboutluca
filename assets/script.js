var thinkergif = ["assets/images/thinker01.gif","assets/images/thinker02.gif", "assets/images/thinker03.gif","assets/images/thinker04.gif","assets/images/thinker05.gif", "assets/images/thinker06.gif"];
var thinkerimg = ["assets/images/thinker01.png","assets/images/thinker02.png", "assets/images/thinker03.png","assets/images/thinker04.png","assets/images/thinker05.png", "assets/images/thinker06.png"];
var thinkerclasses = document.getElementsByClassName('escritores-pensadores-container-painel-imagem');

function TrocarImagem(tc, tg){
	tc.src = tg;
}

function VoltarImagem(tc,ti){
	tc.src = ti;
}