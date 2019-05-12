---
  layout: post
  title: Numeric Separator, um  syntax sugar pouco usado
  date: 2019-03-17 12:00:00
  description: Melhore a legibilidade do código com este recurso do TypeScript!
  img: typescript-series/numeric-separator/post-image.png
  tags: [typescript] 
---

Olá, esse é o **primeiro post** de uma **série de posts** que irei fazer sobre recursos interessantes e pouco utilizados do [TypeScript](https://www.typescriptlang.org/) :sunglasses: 

> Update do futuro :joy:, alguns posts já estão prontos e você pode acessá-los através dos links abaixo
  * [Numeric Seperator](/typescript-numeric-separator) 
  * [Typeguards com o In e Is operators](/typescript-typeguards-in-is/)
  * [Partial Type](/typescript-partial-type/)
  * [Mapped Types](/mapped-types/)

Então vamos lá! É hora de conhecer este recurso pouco utilizado e que pode tornar seu código mais legível em algumas situações.

É muito comum ter situações de código onde temos constantes numéricas com um valor muito alto. Como no exemplo abaixo:

```typescript
const accountBallance = 3500250000;
```

Porém, a legibilidade não é das melhores, este código requer um esforço mental para que seja entendido de fato o que este número enorme representa.

É aí que entra o **Numeric Separator**, um syntax sugar muito interessante que o TypeScript nos oferece. Com ele, podemos separar as casas de milhares usando **_** (underscore).

```typescript
const accountBallance = 3_500_250_000;
```

Desta forma, ao contrário do exemplo anterior, não é necessário nenhum esforço para dizer que este número equivale a 3 bilhões e alguns trocados... :joy:

Vale lembrar que isso não irá atrapalhar em nada com a sua tipagem, a constante **accountBalance** continua sendo do tipo **number**.

Quando o código for transpilado para JavaScript, os underscores serão simplismente removidos. Gerando o seguinte resultado:

```javascript
var accountBallance = 3500250000;
```

Por hoje é isso. Espero que esse post tenha te ajudado e se tiver alguma dúvida ou sugestão, comenta aí e até a pŕoxima! :+1:

