---
  layout: post
  title: Git Hooks com Husky - seu código mais blindado
  date: 2019-02-02 12:00:00
  description: Aprenda a blindar o código do seu repositório remoto com o poder dos hooks do git!
  img: hooks-com-husky/post-image.jpg
  tags: [codequality] 
---

Aprenda a blindar o código do seu repositório remoto com o poder dos hooks do git!

Você trabalha em equipe e já vivenciou algum dos seguintes problemas?

  * O código não possui um padrão de escrita, cada desenvolvedor escreve código seguindo um padrão de sua cabeça, e, isso se torna um problema quando você precisa dar manutenção no código de um colega de trabalho.
  Este seria um pequeno exemplo:
  ```javascript
    // Programador 1
    if (something) 
    {
      doSomething();
    }  
  ```
  ```javascript
    // Programador 2
    if (something) {
      doSomething();
    }  
  ```
  ```javascript
    // Programador 3
    if (something) { doSomething(); }  
  ```
  ```javascript
    // Programador 4
    if (something) doSomething();
  ```
  Repare que, para uma **mesma funcionalidade**, encontramos aqui **4 diferentes** formas de escrita.
  
  * Alguém fez um commit antes de rodar os testes e essa bomba explodiu na sua mão ao tentar fazer um build do projeto.

Se você já vivenciou algum dos cenários acima, então pare e dê atenção a este pequeno tutorial, pois te garanto que não passará mais por isso! :smiley:

### Git hooks

Bom, git hooks são scripts que o git é capaz de executar antes ou depois de alguns **eventos**, sendo eles, commit, push, receive, merge, etc. 

Todos esses scripts de configuração dos hooks ficam dentro do diretório **.git/hooks** de seu projeto, o problema que temos aqui, é que esses scripts não são transferidos em um **git clone**, sendo assim, os desenvolvedores teriam de compartilhar esses hooks uns com os outros de uma outra forma não automatizada, e é aí que entra o Husky, para facilitar não só a configuração como também o compartilhamento dos hooks.

### Husky

Husky é um projeto [open source](https://github.com/typicode/husky){:target="_blank"} que facilita a configuração dos nossos hooks e também o compartilhamento dos hooks conforme citado anteriormente, uma vez que, essa configuração passa a ser versionada!

### Solução

Para exemplificar o uso do Husky, vamos considerar o seguinte cenário em um projeto já existente.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/hooks-com-husky/example-1.png" alt="Exemplo 1 de código incorreto">
</p>

Repare que, o lint do editor de texto, acusa vários erros, sendo eles

  * O uso de **var**, que não é mais recomendado, desde o ES6 que trouxe feature de **const** e **let**.
  * A falta de um **; (ponto vírgula)**  no final da arrow function.
  * As chaves do **if** que não estão seguindo o padrão imposto pela linguagem / lint.

Neste caso, ainda estamos considerando um bom cenário, em que o editor de texto acusa os erros de lint e o desenvolvedor pode corrigí-los em tempo de desenvolvimento, mas, nem todo editor de texto (dependendo da sua configuração) dará esse tipo de funcionalidade. Ou seja, o desenvolvedor está livre para realizar o commit de um código que não segue os padrões de escrita desejáveis... :sob: :sob:

Para impedir isso, vamos instalar o husky no projeto e configurar os nossos hooks!

```bash
  npm install --save-dev husky
```

Com o husky instalado, edite o arquivo **package.json** para ter a seguinte estrutura **adicionada** a ele.
```json
  {
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint", 
      "pre-push": "npm run test"
      }
    }
  }
```

Dessa forma temos configurado o evento de **pre-commit** para executar o lint e o evento de **pre-push** para executar os testes do projeto.

Claro que, você pode customizar a sua configuração conforme necessário, para que o nosso exemplo funcione corretamente, é necessário que seu **package.json** também tenha a configuração dos scripts. Segue um exemplo da sessão de scripts do **package.json** de um dos meus projetos:
```json
  {
    "scripts": {
      "test": "gulp validate",
      "lint": "node_modules/.bin/tslint --project tsconfig.json",
      "build": "tsc"      
    }
  }
```

Vamos manter o código incorreto e tentar realizar um commit das alterações.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/hooks-com-husky/hook-pre-commit-error.png" alt="Hook sendo executado com código incorreto">
</p>

Repare que foi executado o nosso script de **pre-commit**, que por sua vez está configurado para executar o **npm script** de **lint**. Como alguns erros de lint foram encontrados, o commit não foi finalizado, logo, só é possível realizar o commit após fazer as correções listadas pelo lint.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/hooks-com-husky/example-2.png" alt="Código corrigido após hook pre-commit">
</p>

Com as correções realizadas, basta realizar o commit.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/hooks-com-husky/hook-pre-commit-success.png" alt="Hook sendo executado com código correto">
</p>

E é isso, após as correções no código, temos o commit realizado com sucesso, mantendo assim o padrão do código! Claro que você pode configurar outros hooks, executar outros scripts (testes, build, lint etc). Neste [link](https://git-scm.com/docs/githooks){:target="_blank"} você pode acessar a lista completa de hooks existentes e todos eles são suportados pelo Husky. 

Espero ter ajudado e até a próxima! :+1:
