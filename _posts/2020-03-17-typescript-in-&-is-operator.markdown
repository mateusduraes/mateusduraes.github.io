---
  layout: post
  title: In & Is Operator no TypeScript
  date: 2019-03-17 12:00:00
  description: Melhore a legibilidade do código com este recurso do TypeScript!
  img: typescript-series/numeric-separator/post-image.png
  tags: [codequality, goodpractices, ts, typescript, typescriptseries] 
---

Olá, esse é o **segundo post** de uma **série de posts** que irei estou fazendo sobre TypeScript.
O primeiro post você foi sobre Numeric Separator e você pode acessar [aqui](www.google.com.br).

##### Tratando diferentes tipos de forma genérica dentro de uma função


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

```

#### Cenário da função genérica

```typescript
sayHello(developer);
sayHello(designer);

function sayHello(person: Developer | Designer): void {
  if (person.bestLanguage) {
    console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
  } else {
    console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
  }
}
```


#### Cenário com erro 1

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/typescript-series/in-&-is-operator/error-1.png" alt="Primeiro caso de erro">
</p>

#### Cenário com erro 2

```typescript
function sayHello(person: Developer | Designer): void {
  if ((person as Developer).bestLanguage) {
    console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
  } else {
    console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
  }
}
```

Porém isso da um erro, pois typescript não reconhece o tipo de `person`.

<p align="center"> 
  <img src="{{site.baseurl}}/assets/img/typescript-series/in-&-is-operator/error-2.png" alt="Primeiro caso de erro">
</p>


#### Possível cenário 1
```typescript
function sayHello(person: Developer | Designer): void {
  if ('bestLanguage' in person) {
    console.log(`Hello developer, you're really good with ${person.bestLanguage}`);
  } else {
    console.log(`Hello designer, you're really good with ${person.bestSoftware}`);
  }
}
```

#### Possível cenário 2

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