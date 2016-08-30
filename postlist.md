---
layout: default
title: Últimos Posts
permalink: /posts
pagina: posts
---

<div class="container padding-post-list">
	<div class="row">	
		<div class="col-sm-8 col-sm-offset-2">
    
{% for post in site.posts %}
	        <div class="panel panel-default postagem">
          <div class="panel-heading">
            <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>            
            <time>{{ post.date | date_to_string }}</time>                     
          </div>

          <div class="panel-body">
            <p>{{ post.resumo }}</p>
            <!--
            <div class="pull-right">
              <p>Tag: <strong><a href="#" class="tag">{{ post.categories }}</a></strong></p>
            </div>
            -->
          </div>
        </div>
{% endfor %}   

        <button class="pagina-anterior btn btn-success">Mais Novas</button>
        <button class="proxima-pagina pull-right btn btn-success">Mais antigas</button>
		</div>		
	</div>
</div>

