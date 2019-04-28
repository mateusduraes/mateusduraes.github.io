---
  layout: post
  title: TypeScript Partial Type
  date: 2019-04-13 12:00:00
  description: Conheça o Partial type e nunca mais modifique suas interfaces de forma errônea para atender uma função
  img: typescript-series/partial-type/post-image.png
  tags: [codequality, goodpractices, ts, typescript, typescriptseries] 
---

Olá, esse é o **terceiro e penúltmimo post** de uma **série de posts** que estou fazendo sobre TypeScript.
Caso você tenha perdido os posts anteriores, você pode acessá-los através dos links abaixo:
  * [Numeric Seperator](/typescript-numeric-separator)  
  * [Typeguards com o In e Is operators](/typescript-typeguards-in-is/)
  * [Mapped Types](/mapped-types/)


Hoje venho apresentar mais um recurso sensacional e desconhecido do TypeScript, o tipo **Partial**.

Já passou por algum cenário, onde você tinha uma função que receberia como parâmetro **somente uma parte (partial) de uma interface que você criou**? Pois então, é pra isso que existe o **Partial**, considere o seguinte cenário de código:


```typescript
interface Person {
  name: string;
  age: number;
  id: number;
}

const person: Person = {
  name: 'Mateus',
  age: 24,
  id: 1,
};

const updatePersonById = (id: number, person: Person) => {
  console.log('... update person ...');
};

updatePersonById(1, { age: 25 }); // Error, este objeto não atende a tipagem da interface Person
```

Não é preciso muita experiência com TypeScript para ver que esse código não será transpilado, pois ao invocar a função `updatePersonById` não estamos passando um objeto que atenda a interface `Person`. Para isso, deveríamos também passar os atributos `name` e `id`.

O que muitas pessoas fazem neste cenário é fazer com que os campos de sua interface se tornem opcionais, como no código abaixo

```typescript
interface Person {
  name?: string;
  age?: number;
  id?: number;
}
```

Isso funciona, mas não é nem um pouco recomendado pois perdemos a segurança de nossa tipagem.

A boa notícia, é que o TypeScript já possui uma solução para este tipo de problema com o uso do tipo `Partial`, conforme no código abaixo

```typescript
const updatePersonById = (id: number, person: Partial<Person>) => {
  console.log('... update person ...');
};

updatePersonById(1, { age: 25 });
```

Desta forma, é possível utilizar a função alcançando a funcionalidade desejada sem ter de alterar a interface `Person`! :astonished:

Apenas a título de curiosidade, a interface `Partial` é o que chamamos de um **Mapped Type** em TypeScript, sua implementação internamente é a seguinte

```typescript
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };
```

No meu próximo post vou falar um pouco sobre este mapeamento de tipos (Mapped Type) e como ele pode nos ajudar em algumas situações.

Valeu e até a pŕoxima. :+1:
