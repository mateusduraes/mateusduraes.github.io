---
  layout: post
  title: Type Guards com In & Is
  date: 2019-03-17 12:00:00
  description: Melhore a legibilidade do código com este recurso do TypeScript!
  img: typescript-series/numeric-separator/post-image.png
  tags: [codequality, goodpractices, ts, typescript, typescriptseries] 
---

Olá, esse é o **segundo post** de uma **série de posts** que estou fazendo sobre TypeScript.
O primeiro post foi sobre **Numeric Separator** e você pode acessar [aqui](/typescript-numeric-separator).

Hoje vou abordar o uso do **In** e do **Is** como formas de type guards em contextos de código genérico.

Se você desenvolve com Typescript é provável que já tenha passado por cenários onde uma função trata diferentes tipos conforme o código abaixo:

```typescript
interface Developer {
  name: string;
  bestLanguage: string;
}

interface Designer {
  name: string;
  bestSoftware: string;
}

const developer: Developer = { name: 'Mateus', bestLanguage: 'Ruby' };
const designer: Designer = { name: 'Luís', bestSoftware: 'Photoshop' };

function sayHello(person: Developer | Designer): void {
  if (person.bestLanguage) {
    console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
  } else {
    console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
  }
}
```

Parece tudo certo com este código não é mesmo? Porém, ele não será transpilado. Conforme a imagem abaixo nos mostra!

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/typescript-series/in-&-is-operator/error-1.png" alt="Primeiro caso de erro">
</p>

Desta forma o Typescript não é capaz de identificar qual é o tipo da variável, pois estamos tentando acessar uma propriedade que talvez não exista em um dos tipos, justamente da forma que é apresentado no erro. Um possível caminho, seria fazer um cast.

```typescript
function sayHello(person: Developer | Designer): void {
  if ((person as Developer).bestLanguage) {
    console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
  } else {
    console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
  }
}
```

Porém isso ainda não transpila, pois o Typescript continua não reconhecendo o tipo de `person` dentro de cada bloco.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/typescript-series/in-&-is-operator/error-2.png" alt="Primeiro caso de erro">
</p>

Sendo assim, poderíamos apelar e fazer o cast todas as vezes que alguma propriedade de `person` for acessada. Mas, isso seria uma péssima prática. 

Então, sem mais delongas, vamos as soluções, a primeira delas é o uso do **in**.

#### In operator

O **in** operator vai fazer uma verificação segura se o objeto possui a propriedade, assim o Typescript será capaz de identificar o tipo da variável com base nisso.

```typescript
function sayHello(person: Developer | Designer): void {
  if ('bestLanguage' in person) {
    console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
  } else {
    console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
  }
}
```

#### Função de Type Guard

Uma segunda solução, que eu particularmente prefiro e recomendo é o uso de uma função como **Type guard**, repare no tipo de retorno da função, onde usamos a palavra chave **is**.

```typescript
function isDeveloper(person: Developer | Designer): person is Developer {
  return (person as Developer).bestLanguage !== undefined;
}

function sayHello(person: Developer | Designer): void {
  if (isDeveloper(person)) {
    console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
  } else {
    console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
  }
}
```

Com ambas as soluções o nosso código será transpilado normalmente, e em tempo de desenvolvimento teremos o autocomplete dentro de cada bloco de acordo com o tipo da variável. No gif abaixo podemos ver isso na prática.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/typescript-series/in-&-is-operator/typeguard.gif" alt="Gif Função de Typeguard">
</p>

É isso! Espero que essas dicas de **Type Guards** possam deixar o seu código TypeScript mais safe.

A série continuará, então, até a pŕoxima. :+1:
