
//script da troca de imagens
var thinkergif = ["assets/images/thinker01.gif","assets/images/thinker02.gif", "assets/images/thinker03.gif","assets/images/thinker04.gif","assets/images/thinker05.gif", "assets/images/thinker06.gif"];
var thinkerimg = ["assets/images/thinker01.png","assets/images/thinker02.png", "assets/images/thinker03.png","assets/images/thinker04.png","assets/images/thinker05.png", "assets/images/thinker06.png"];
var thinkerclasses = document.getElementsByClassName('escritores-pensadores-container-painel-imagem');

function TrocarImagem(tc, tg){
	tc.src = tg;
}

function VoltarImagem(tc,ti){
	tc.src = ti;
}

//script da troca de perguntas
var contador = -1;
var perguntas = ["Música favorita?", "Quais são seus Hobbies?", "Tem interesse em desenvolver pra qual área?", "Tipo MBTI?", "Anime/Mangá favorito?", "Qual seminário mais gostou de fazer?", "Quando começou a estudar filosofia?", "Quando começou a estudar Programação?"];
var respostas = ["Essa pergunta é bem ampla, na verdade. Eu sempre digo que minha música favorita é 'Stairway to Heaven' do Led Zeppelin. Hoje é 'Os Alquimistas Estão Chegando do Jorge Ben. Amanhã, provavelmente, será 'Taxman' dos Beatles ou 'Little Dark Age' do MGMT.", 
"Música (toco violão e ukulele), tento cantar, escrever, jogar algo de vez em quando, ler e estudar filosofia. Esse último eu levo mais a sério e é de longe o que eu mais faço.", 
"Sendo bem sincero, não faço ideia. Entretanto, tenho interesse em aplicações back-end e no stack de Javascript (Javascript, Typescript, Node, React e React Native).",
"INTP.",
"Meus animes favoritos são (na ordem): Monster, Serial Experiments Lain, Fullmetal Alchemist, Hunter x Hunter e Paranoia Agent. Tem muitos outros que eu curto, mas os que mais gosto são esses. Sobre os mangás: todos do Naoki Urasawa.",
"Todos. Meu grupo é excelente e faz qualquer seminário ser incrível. Porém, tenho um carinho especial pelo seminário da Divina Comédia e amo o seminário dos Pensadores Medievais e o dos Empiristas e Imanentes.",
"Estudar de verdade foi só em 2020. Comecei a estudar filosofia por conta do dialógo 'Apologia de Sócrates' do Platão. Esse diálogo mudou completamente minha vida e por conta dele percebi que deveria reconstruir as bases de meu conhecimento. Cá estou até hoje. Antes dessa leitura, já tive contato com temas éticos, mas nada muito aprofundado.",
"Depois que decidi entrar nesse curso, eu resolvi fazer um breve estudo de lógica de programação. Nada muito pesado, pois sabia que aprenderia isso com profundidade na escola. Comecei a estudar programação um mês antes das aulas começarem. Eu me empolguei tanto que acabei pegando a matéria de TPA do ano inteiro nesse um mês."];

function TrocarFAQ(direita){
	if(direita)
	{
		if(contador>=7){
			contador = 0;
		}else{
			contador++;
		}
	}
	else
	{
		if(contador<=0){
			contador = 7;
		}else{
			contador--;
		}
	}
	var pergunta = document.querySelector('.pergunta');
	var resposta = document.querySelector('.resposta');

	pergunta.innerHTML = `<h2>${perguntas[contador]}</h2>`;
	resposta.innerHTML = `<p>${respostas[contador]}</p>`;
}