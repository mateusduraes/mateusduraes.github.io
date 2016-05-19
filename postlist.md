---
layout: default
title: Lista de Posts
permalink: /posts
pagina: posts
---

<div class="container">
	<div class="row">	
		<div class="col-sm-8 col-sm-offset-2">
{% for post in site.posts limit:4  %}
	        <div class="panel panel-default">
          <div class="panel-heading">
            <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>            
            <time>{{ post.date | date_to_string }}</time>                     
          </div>

          <div class="panel-body">
            <p>{{ post.resumo }}</p>
            <div class="pull-right">
              <p>Tag: <strong><a href="#" class="tag">{{ post.categories }}</a></strong></p>
            </div> 
          </div>
        </div>        
{% endfor %}
		</div>		
	</div>
</div>