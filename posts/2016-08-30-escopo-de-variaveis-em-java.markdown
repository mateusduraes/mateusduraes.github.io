---
layout: post
title: Escopo de variáveis em Java
date: 2016-08-30 22:34:56
description: Entenda o escopo de uma variável em Java, onde ela pode ou não ser acessada e conheça também a técnica do shadowing. # Add post description (optional)
img: java-scope.jpg # Add image post (optional)
tags: [java]
---
### Série de posts sobre a certificação 1Z0-808 (Java SE 8 Programmer I)

Olá pessoal, estou me preparando para a certificação Java 1Z0-808 e esse exame possui vários tópicos, pretendo postar aqui no blog sobre aqueles que eu achar mais interessante ou que alguém pedir. Não entrarei aqui em detalhes sobre uma certificação ser boa ou não, mas vale lembrar que, no fim das contas, teremos mais conhecimento independente do resultado (minha opinião).

Caso você tenha curiosidade sobre a certificação, preço, tópicos para o exame, etc você poderá encontrar informações da mesma <a href="https://education.oracle.com/pls/web_prod-plq-dad/db_pages.getpage?page_id=5001&get_params=p_exam_id:1Z0-808" target="_blank">aqui</a>

Por fim, no post de hoje irei falar sobre o escopo de variáveis em Java, que por sinal, é o primeiro tópico do exame.

### Uma variável em Java tem o seu escopo de vida. Ok, mas, o que é isso?

O escopo de vida de uma variável, é aquele lugar em que ela pode ser referenciada (chamada, manipulada), esse escopo, por sinal, é o mesmo em que ela é declarada. Isso significa que, fora desse escopo, a variável não pode ser referenciada, é como se ela não existisse.
Por exemplo: Uma variável declarada dentro de um ```if```, só é válida dentro do ```if```. Uma variável declarada na inicialização do comando ```for```, só é válida dentro dele. Observe o código abaixo:





Variáveis que são recebidas como parâmetros em métodos, também só são válidas dentro do método.

Variáveis com o mesmo nome podem existir, desde que não estejam no mesmo escopo. Um bom exemplo é o método ```setNome()``` na classe abaixo.


Por outro lado, nesse segundo exemplo, já temos um erro de compilação, pois por mais que as variáveis sejam uma de instância e outra estática, elas são definidas no mesmo escopo, o que causa um erro de compilação.

{% highlight java %}
class Exemplo {
	String a;
	static String a;

	public static void main (String [] args){
		new Exemplo().a = ""; //Como a JVM saberia qual 'a' ela deve acessar? Sacanagem em !?
		// Erro de compilação
	}
}
{% endhighlight %}

### Técnica do Shadowing

A técnica do shadowing é muito importante, pois, mesmo conhecendo o escopo das variáveis, podemos nos confundir por causa do shadowing. Veja o exemplo abaixo:

{% highlight java %}
class Exemplo {
	static int a = 4;

	public static void main (String[] args){
		String a = "abc";
		System.out.println(a); // "abc"
	}
}
{% endhighlight %}


Ao compilar e executar esse código, percebe-se que a saída foi `"abc"`, mas, o que aconteceu com a nossa variável estática do tipo `int`? 
Ela foi escondida pelo shadowing, sempre que existem duas variáveis com um mesmo nome, a JVM irá optar por aquela de menor escopo. Repare que se comentarmos a linha que declaramos e inicializamos a `String`, teremos a saída desejada.

{% highlight java %}
class Exemplo {
	static int a = 4;

	public static void main (String[] args){
		//String a = "abc";
		System.out.println(a); // 4
	}
}
{% endhighlight %}

