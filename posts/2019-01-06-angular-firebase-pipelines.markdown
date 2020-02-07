---
  layout: post
  title: Deploy de aplicações Angular no Firebase Hosting com Bitbucket Pipelines
  date: 2019-01-11 18:00:00
  description: Aprenda a configurar o Bitbucket Pipelines para conversar com o Firebase Hosting!
  img: angular-firebase-pipelines/post-image.png
  tags: [continuous-integration] 
---

Aprenda a configurar o Bitbucket Pipelines para conversar com o Firebase Hosting!


Esse tutorial será dividido em alguns passos que serão necessários até atingirmos a configuração completa para o deploy automatizado.
  * [Criação do projeto Angular](#criação-do-projeto-angular)
  * [Criação do repositório no Bitbucket](#criação-do-repositório-no-bitbucket)
  * [Criação do projeto no firebase](#criação-do-projeto-no-firebase)
  * [Instalação do Firebase CLI](#instalação-do-firebase-cli)
  * [Configuração do Bitbucket Pipelines](#configuração-do-bitbucket-pipelines)

### Criação do projeto Angular

Para inicializar será necessário criar um projeto Angular do zero para fazer o deploy do mesmo, caso você esteja lendo este tutorial e pretende fazer com o seu projeto já existente, pode pular essa etapa.

```bash
  $ ng new pipelines-tutorial
  $ cd pipelines-tutorial
  $ git init
```

### Criação do repositório no Bitbucket

Agora, podemos fazer a criação do repositório no Bitbucket

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/angular-firebase-pipelines/create-repository.jpeg" alt="Criação do repositório no Bitbucket">
</p>

Aproveite para já linkar o seu repositório local do git ao repositório remoto que acabamos de criar.
```bash
  $ git remote add origin git@bitbucket.org:<YOUR_BITBUCKET_NICKNAME>/pipelines-tutorial.git
  $ git push -u origin master
```

### Criação do projeto no firebase

Agora, basta acessar o [console do firebase](https://console.firebase.google.com/){:target="_blank"} e criar o projeto no firebase. Nessa parte, não tem muito segredo, basta fazer o login com sua conta e adicionar um novo projeto.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/angular-firebase-pipelines/create-firebase-project.jpeg" alt="Criação do projeto no Firebase">
</p>

### Instalação do Firebase CLI

Para comunicar diretamente com os recursos do firebase, será necessário instalar a [CLI do firebase](https://firebase.google.com/docs/cli){:target="_blank"} em seu computador. Basta rodar os seguintes comandos em seu terminal.

```bash
  $ npm install -g firebase-tools  
```

Após instalado a Firebase CLI, podemos realizar o login com a conta que foi criada.

```bash
  $ firebase login
```
Esse comando irá abrir o seu browser default e pedir as suas credencias de login do Firebase. Após o login vocẽ verá uma mensagem como essa no seu terminal:

```bash
  ✔  Success! Logged in as youremail@email.com
```

### Linkando o seu projeto Angular com o projeto Firebase

Para que seja possível fazer o deploy, bem como usar de outras possíveis funcionalidades do firebase, você vai precisar rodar os seguintes comandos, para que seu projeto Angular seja também conhecido como um projeto Firebase.

```bash
  $ firebase init
```

Após rodar esse comando, você deverá selecionar quais funcionalidades do firebase pretende usar, no nosso caso, somente o Hosting será necessário. Você pode selecionar a opção utilizando a tecla de espaço e enter para prosseguir.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/angular-firebase-pipelines/select-hosting-terminal.jpeg" alt="Seleção do Hosting no terminal">
</p>

Será necessário selecionar o projeto que você criou e então algumas perguntas serão feitas para a inicialização do projeto. Atente-se as respostas conforme a imagem abaixo, iremos utilizar a pasta pública, sendo a pasta **dist** do nosso projeto Angular, pois é a pasta que contém o projeto após o build.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/angular-firebase-pipelines/firebase-complete.jpeg" alt="Configuração final do firebase">
</p>

### Configuração do Bitbucket Pipelines

Inicialmente será necessário a criação do arquivo **bitbucket-pipelines.yml**, esse arquivo conterá as regras que dizem qual script deve ser executado em cada situação para que o deploy seja feito.

Então, na **raiz** do projeto, execute o seguinte comando para a criação do arquivo.
```bash
  $ touch bitbucket-pipelines.yml
```

Agora, basta fazer a configuração do arquivo, para que os deploys acontecam de forma automática, seu arquivo deve ficar seguinte forma:

```yml
image: atlassian/default-image:2
pipelines:
  branches:
    master:
      - step:
          script:
            - npm install -g @angular/cli --quiet
            - npm install -g firebase-tools --quiet
            - npm install --quiet
            - ng build --prod --aot
            - firebase use pipelines-tutorial --token $TOKEN
            - firebase deploy --token $TOKEN
```

Vamos entender agora, o que significa essa configuração em nosso arquivo **bitbucket-pipelines.yml**:

  * **image**: define qual container docker será utilizado para executar nosso script, em nosso caso, estamos utilizando um container default fornecido pelo Bitbucket.
  * **pipelines**: essa linha marca o início da configuração de nosso pipelines
  * **branches**: essa linha define uma sessão para as branchs de nosso repositório git que queremos utilizar do pipelines, ou seja, podemos ter um processo de deploy para branch de produção e outro para branch de teste por exemplo. No caso, estamos configurando apenas para a `master`.
  * **step**: carateriza uma unidade de execução, cada step irá levantar um container do docker e serão executados na ordem em que aparecem no script, em nosso caso, somente um é necessário.
  * **script**: contém a lista de comandos que serão executados em sequência.

Repare que em nosso script, estamos instalando o **@angular/cli** e também o **firebase-tools** (Firebase CLI), pois isso está sendo executado em um container do docker onde ainda não temos essas dependências instaladas.

Bom, isso ainda não é suficiente para que o nosso deploy ocorra de forma automatizada, repare que em nosso script temos dois comandos usando uma variável de ambiente chamada **$TOKEN**, isso ocorre pois para utilizar esses comandos, precisamos nos autenticar no firebase, porém, essa autenticação ocorre no container do docker e deve ser feita via token.
Para isso, acesse seu terminal e execute o seguinte comando:

```bash
  $ firebase login:ci
```

Esse comando, também irá abrir seu browser default e você deverá fornecer suas credencias do firebase e realizar o login. Após isso, você terá o token de acesso em seu terminal da seguinte forma:

```bash
✔  Success! Use this token to login on a CI server:

<your_token_will_be_here>

```

A única coisa necessária agora será registrar esse token na interface do Bitbucket. Para isso, em seu repositório no Bitcuket, realize as seguintes configurações:

* Acesse o caminho **Settings > Pipelines > Settings** e habilite o pipelines em seu projeto.
* Acesse o caminho **Settings > Pipelines > Repository variables** e adicione a variável TOKEN, onde seu valor será o token copiado do terminal no passo anterior.

Agora sim! É só dar um commit e um push na master e ver a mágica acontecer.

```bash
  $ git add .
  $ git commit -m 'Bitbucket pipelines config'
  $ git push origin master
```

Após dar o push, acesse a opção Pipelines dentro de seu repositório do bitbucket e você terá uma visualização como essa

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/angular-firebase-pipelines/pipelines-panel.jpeg" alt="Painel do pipelines">
</p>

Clicando no link, você tem acesso ao script sendo executado em tempo real! :scream::scream:

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/angular-firebase-pipelines/realtime-script.jpeg" alt="Script sendo executado em tempo real">
</p>

Em nosso caso, tudo ocorreu com sucesso e o sistema pode ser acessado no [link](https://pipelines-tutorial.firebaseapp.com){:target="_blank"} informado na saída do script como **Hosting URL**. 

Caso algo tivesse dado errado em nosso deploy, seríamos notificados por e-mail, demais não é mesmo!?

Espero que esse tutorial tenha te ajudado, até a pŕoxima! :+1: