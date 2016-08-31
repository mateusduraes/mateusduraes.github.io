function mostraPostsStart(postagem){
	for (var i = postagem - 1; i >= 0; i--) {
		$(posts[i]).show();
	}
}

function escondePosts(){
	for (var i = 0; i < posts.length; i++) {
		$(posts[i]).hide();
	}
}

function mostraPosts(inicio, limite){
	for(var i = inicio; i < limite; i++){
		$(posts[i]).show();
	}
}

function verificaBotoes(postagem){
	if(postagem != 3){
		$('.pagina-anterior').show(500);
	} else {
		$('.pagina-anterior').hide(500);
	}

	if(postagem >= posts.length){
		$('.proxima-pagina').hide(500);
	} else {
		$('.proxima-pagina').show(500);
	}
}

var postagem = 3;
var posts = $('.postagem').toArray();

console.log(posts);
escondePosts();
mostraPostsStart(postagem);

if (posts.length <= 3){
	$('.proxima-pagina').hide();
}

$('.proxima-pagina').click(function (){		

	var inicio = postagem;
	postagem += 3;

	var limite = postagem;
	console.log("Clicando no botão próxima página, postagem " + postagem);
	
	window.location.href = '#redirect';

	escondePosts();
	mostraPosts(inicio, limite);
	verificaBotoes(postagem);
});

$('.pagina-anterior').click(function (){	
	postagem -= 3;
	var limite = postagem;
	var inicio = limite - 3;
	console.log("Clicando no botão página anterior, postagem " + postagem);	

	window.location.href = '#redirect';

	escondePosts();
	mostraPosts(inicio, limite);
	verificaBotoes(postagem);
});

