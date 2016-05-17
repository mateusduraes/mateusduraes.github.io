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
	        		<h4>{{ post.title }}</h4>
	        		<time>{{ post.date | date_to_string }}</time>
	        	</div>

	        	<div class="panel-body">
	        		<p>{{ post.resumo }}</p>
	        		<a href="{{ post.url }}">
	              		<button type="button" class="btn btn-default pull-right">
	               			 <span class="glyphicon glyphicon-plus-sign"></span>  Ver Mais
	              		</button>
	            	</a>
	        	</div>
	        </div>	        
{% endfor %}
		</div>		
	</div>
</div>