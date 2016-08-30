---
layout: post
title:  "Sexto Post"
date:   2016-08-30 01:02:03 -0300
categories: jekyll update
resumo: Este é um resumo do sexto post, esse texto não deve ser considerado.
---

# Defina o escopo das variáveis

## Escopo de Vida da Variável

#### Uma variável em Java tem o seu escopo de vida. Ok, mas, o que é isso?

O escopo de vida de uma variável, é aquele lugar em que ela pode ser referenciada (chamada, manipulada), esse escopo, por sinal, é o mesmo em que ela é declarada. Isso significa que, fora desse escopo, a variável não pode ser referenciada, é como se ela não existisse.
Por exemplo: Uma variável declarada dentro de um ```if```, só é válida dentro do ```if```. Uma variável declarada na inicialização do comando ```for```, só é válida dentro dele. Observe o código abaixo:


```java
class Exemplo {
	public static void main (String [] args){	
		for(int i = 0; i < 10; i++){
			System.out.println(i);
		}
		System.out.printn(i); //Erro de compilação
	}
}
```

Variáveis que são recebidas como parâmetros em métodos, também só são válidas dentro do método.

Variáveis com o mesmo nome podem existir, desde que não estejam no mesmo escopo. Um bom exemplo é o método ```setNome()``` na classe abaixo.

```java
class Pessoa {
	private String nome;

	public void setNome(String nome){
		this.nome = nome;
	}
}
```

Por outro lado, nesse segundo exemplo, já temos um erro de compilação, pois por mais que as variáveis sejam uma de instância e outra estática, elas são definidas no mesmo escopo, o que causa um erro de compilação.

```java
class Exemplo {
	String a;
	static String a;

	public static void main (String [] args){
		new Exemplo().a = ""; //Como a JVM saberia qual 'a' ela deve acessar? Sacanagem em !?
		// Erro de compilação
	}
}
```

#### Técnica do Shadowing

A técnica do shadowing é muito importante, pois, mesmo conhecendo o escopo das variáveis, podemos nos confundir por causa do shadowing. Veja o exemplo abaixo:

```java
class Exemplo {
	static int a = 4;

	public static void main (String[] args){
		String a = "abc";
		System.out.println(a); // "abc"
	}
}
```

Ao compilar e executar esse código, percebe-se que a saída foi "abc", mas, o que aconteceu com a nossa variável estática do tipo int? 
Ela foi escondida pelo shadowing, sempre que existem duas variáveis com um mesmo nome, a JVM irá optar por aquela de menor escopo. Repare que se comentarmos a linha que declaramos e inicializamos a String, teremos a saída desejada.

```java
class Exemplo {
	static int a = 4;

	public static void main (String[] args){
		//String a = "abc";
		System.out.println(a); // 4
	}
}
```