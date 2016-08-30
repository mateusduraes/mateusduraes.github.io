$('#facebook').hover(
  function(){ //Função do HandlerIn para o facebook
    $(this).find('img').attr('src', '/imgs/facebook_hover.png');
  }, 
  function (){ //Função do HandlerOut para o facebook
    $(this).find('img').attr('src', '/imgs/fb.png');
  }
);

$('#github').hover(
  function(){ //Função do HandlerIn para o github
    $(this).find('img').attr('src', '/imgs/github_hover.png');
  },
  function(){ //Função do HandlerOut para o github
    $(this).find('img').attr('src', '/imgs/github.png');
  }
);

$('#email').hover(
  function(){ //Função do HandlerIn para o email
    $(this).find('img').attr('src' , '/imgs/email_hover.png');
  },
  function(){ //Função do HandlerOut para o email
    $(this).find('img').attr('src', '/imgs/email.png');
  }
);
