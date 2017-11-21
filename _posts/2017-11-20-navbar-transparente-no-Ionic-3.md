---
  layout: post
  title: Navbar transparente no Ionic 3
  date: 2017-11-20 23:45:00
  description: Um rápido tutorial de como colocar a navbar transparente no Ionic 3.
  img: ionic.jpg
  tags: [ionic]
---

Já pensou em fazer uma tela no Ionic com a navbar transparente e não sabia por onde começar? De fato, a documentação não ajuda muito para esse caso específico. Então, resolvi escrever esse pequeno tutorial para te auxiliar!

Faremos uma tela bem simples, então, vamos lá...

### Iniciando o projeto Ionic

Abre o seu terminal e vamos iniciar o projeto Ionic e subir o servidor de desenvolvimento.

{% highlight bash %}
  $ ionic start navbar blank
  $ cd ./navbar
  $ ionic serve --lab
{% endhighlight %}

Você deverá ver este resultado se tudo funcionou normalmente.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/transparent-navbar/ionic-initial.png" alt="Projeto inicial">
</p>

Ok, agora, na página ```home``` que foi gerada, iremos adicionar uma imagme de background. Então, no arquivo ```home.scss``` faça a seguinte alteração: 

{% highlight html %}
page-home {
  ion-content {
    background: url('https://i.pinimg.com/736x/7e/ab/f1/7eabf13f8841c2e99366ae661560d5dd.jpg');
  }
}
{% endhighlight %}

iremos adicionar a diretiva ```fullscreen``` ao nosso ion-content. Essa diretiva, como o próprio nome diz, faz com que o ion-content ocupe 100% da tela.

{% highlight html %}
<ion-header>
  <ion-navbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding fullscreen>
  The world is your oyster.
  <p>
    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.
  </p>
</ion-content>
{% endhighlight %}

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/transparent-navbar/ionic-bg.png" alt="backgrouind alterado">
</p>



Repare que, mesmo colocando a diretiva ```fullscreen``` o nosso background ainda não se sobrepõe ao ```navbar```, pois é nele que iremos trabalhar agora.


Agora, iremos adicionar uma segunda diretiva, que é a diretiva ```transparent```, esta, por sua vez, deve ser adiciona ao navbar.

{% highlight html %}
<ion-header>
  <ion-navbar transparent>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-navbar>
</ion-header>
{% endhighlight %}

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/transparent-navbar/ionic-navbar-borda.png" alt="navbar ainda com borda">
</p>


Repare que a navbar já ficou transparente, e conseguimos ver que o ion-content ocupa 100% da tela, mas, no Android, ainda temos uma borda no navbar, que na verdade, pertence ao ion-header, por fim, neste elemento, adicionaremos a diretiva ```no-border```.

{% highlight html %}
<ion-header no-border>
  <ion-navbar transparent>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-navbar>
</ion-header>
{% endhighlight %}

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/transparent-navbar/ionic-navbar-finish.png" alt="navbar finalizada">
</p>

E é isso! Tentei fazer o tutorial de uma forma bem simples e rápida, tentando explicar o real objetivo de cada diretiva que foi necessária.

Valeu, até a próxima! :+1: