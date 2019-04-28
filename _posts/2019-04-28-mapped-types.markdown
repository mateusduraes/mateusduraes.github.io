---
  layout: post
  title: Mapped Types
  date: 2019-04-28 12:00:00
  description: Modificando tipos já existentes
  img: typescript-series/mapped-types/post-image.png
  tags: [codequality, goodpractices, ts, typescript, typescriptseries] 
---

Olá, esse é o **quarto e últomo post** de uma **série de posts** sobre TypeScript.
Caso você tenha perdido os posts anteriores, você pode acessá-los através dos links abaixo:
  * [Numeric Seperator](/typescript-numeric-separator)  
  * [Typeguards com o In e Is operators](/typescript-typeguards-in-is/)
  * [TypeScript Partial Type](/typescript-partial-type/)


### Mapped Types

No meu último post falei um pouco sobre o [Partial Type](/typescript-partial-type/), que por sua vez é um exemplo de Mapped Type. Porém, neste post, vou explicar um pouco mais a fundo sobre os Mapped Types, pois é possível criar os nossos próprios Mapped Types.

Bom, um Mapped Type nada mais é do que a criação de um tipo a partir de outro tipo. Isso ocorre quando mapeamos todas as propriedades de um tipo, fazendo alguma modificação que resultará em um novo tipo! 

Antes que você comece a ficar confuso vamos para um exemplo de código.

```typescript
type Stringify<T> = {
  [P in keyof T]: string;
}

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Mateus', // Precisa ser string!
  age: 24, // Precisa ser number!
}

const userStr: Stringify<User> = {
  name: 'Mateus', // Precisa ser string!
  age: '24', // Precisa ser string!
}
```

No Mapped Type criado acima, mapeamos todas as propriedades do tipo T para serem do tipo string.

Além disso, podemos mesclar um Mapped Type com outro na hora de tipar uma variável, dando mais poder ao nosso código, posso fazer com que `userStr` seja também `Readonly`.

```typescript

const userStr: Readonly<Stringify<User>> = {
  name: 'Mateus',
  age: '24',
};

userStr.age = '25'; // Error
```

Neste caso, o Mapped Type `Readonly` já nos é fornecido pelo próprio TypeScript, assim como o [Partial](/typescript-partial-type/).

### Entendendo a sintaxe do Mapped Type

Para começar, vamos adicionar alguns Mapped Types para explorarmos mais a sintaxe.

```typescript
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
}
```

P irá representar cada propriedade do tipo T que for fornecido quando o tipo for utilizado. Logo em seguida, dizemos qual será o novo tipo de cada membro, neste caso T[P] | null. Ou seja, cada membro terá seu próprio tipo já estabelecido ou null.
Para facilitar, basta imagiar uma nova interface sendo criada com a seguinte estrutura.

```typescript
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
}

interface User {
  name: string
  age: number;
}

// Apenas para exemplificação, o que o Mapped Type Nullable<T> irá gerar é equivalente a interface abaixo:
interface NullableUser {
  name: string | null;
  age: number | null;
}
```

Também é possível em um Mapped Type usar os operadores de '+' e '-' (de maneira opcional), eles irão melhorar muito a semântica do seu Mapped Type facilitando o entendimento do que está sendo mudado.

```typescript
type ReadonlyStringify<T> = {
  +readonly [A in keyof T]: string;
  // Neste caso, fica muito claro que o readonly está sendo adicionado ao tipo.
}

type Full<T> = {
  // Neste caso, fica muito claro que o operador opcional '?' está sendo removido.
  [A in keyof T]-?: T[A];
}
```

É isso, espero que você consiga aplicar os Mapped Types para dar mais poder ao seu código, vejo muitos cenários em que desenvolvedores alteram as interfaces já existentes para atender algum cenário de desenvolvimento, e, muitas vezes, o Mapped Type é um caminho melhor pois você não terá de alterar as interfaces já existentes evitando assim furos na sua tipagem.

Hoje fico por aqui, obrigado! :+1: