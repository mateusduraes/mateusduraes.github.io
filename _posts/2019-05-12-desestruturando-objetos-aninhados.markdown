---
  layout: post
  title: JavaScript - Desestruturando objetos aninhados
  date: 2019-05-12 01:00:00
  description: Desestruturar objetos é uma das features mais interessantes do ES6, mas quando se trata de objetos aninhados, muita gente ainda dificuldade!
  tags: [javascript] 
---

Desestruturar objetos é uma das features mais interessantes do ES6, mas quando se trata de objetos aninhados, muita gente ainda possui algumas dúvidas.

Então, hoje vou apresentar de maneira bem rápida essa funcionalidade.

Vou começar com um objeto que não possui propriedade aninhadas e vamos progredindo, vamos lá!

```javascript
const person = { name: 'Mateus', age: 24 };
const { name, age } = person;
console.log(name); // 'Mateus'
console.log(age); // 24
```

Para o objeto aninhado, basta:

```javascript
const person = { 
  name: 'Mateus',
  age: 24,
  job:  {
    name: 'Developer',
    skills: [ 'js', 'es6' ],
  },
};
const { job: { name, skills } } = person; // Extraindo 'name' e 'skills' de person.job
console.log(name); // 'Developer'
console.log(skills); // [ 'js', 'es6' ]
```

Neste caso não fica muito semântico a variável se chamar `name`, então podemos usar o recurso que renomeia a variável que estamos extraindo!

```javascript
const person = { 
  name: 'Mateus',
  age: 24,
  job:  {
    name: 'Developer',
    skills: [ 'js', 'es6' ],
  },
};
const { name, age, job: { name: jobName } } = person;
console.log(name); // Mateus
console.log(age); // 24
console.log(jobName); // 'Developer'
```

É isso! Se ficou alguma dúvida, pode me chamar ou deixar nos comentários...
Valeu e até a próxima

