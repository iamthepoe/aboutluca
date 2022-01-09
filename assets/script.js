var thinkergif = ["assets/images/thinker01.gif","assets/images/thinker02.gif"];
var thinkerimg = ["assets/images/thinker01.png","assets/images/thinker02.png"];
var thinkerclasses = document.getElementsByClassName('escritores-pensadores-container-painel-imagem');

function TrocarImagem(tc, tg){
	tc.src = tg;
}

function VoltarImagem(tc,ti){
	tc.src = ti;
}