import React from "react"

import ArticleItem from "../ArticleItem"

import * as S from "./styled"

const mock = [
  {
    title: "JavaScript - Desestruturando objetos aninhados",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad. Mollit Lorem id occaecat eiusmod in sit magna ut veniam et reprehenderit nulla eu. Incididunt officia Lorem elit nulla consequat irure incididunt dolore et esse. Cillum enim qui nulla id est do culpa ex magna pariatur irure proident occaecat fugiat. Cillum non sunt ut anim. Aliquip enim excepteur quis laboris esse occaecat ea. Qui ea quis eu culpa irure fugiat magna exercitation incididunt eu velit qui enim nulla. Ut excepteur sint voluptate eiusmod magna quis consectetur ex do ullamco deserunt amet culpa elit.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "TypeScript - Mapped Types",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad. Mollit Lorem id occaecat eiusmod in sit magna ut veniam et reprehenderit nulla eu. Incididunt officia Lorem elit nulla consequat irure incididunt dolore et esse. Cillum enim qui nulla id est do culpa ex magna pariatur irure proident occaecat fugiat. Cillum non sunt ut anim. Aliquip enim excepteur quis laboris esse occaecat ea. Qui ea quis eu culpa irure fugiat magna exercitation incididunt eu velit qui enim ",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "TypeScript - Partial Type",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "TypeScript - TypeGuards com In & Is",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "TypeScript - Numeric Separator",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "Git Hooks com Husky - seu código mais blindado",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "Git Hooks com Husky - seu código mais blindado",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title:
      "Deploy de aplicações Angular no Firebase Hosting com Bitbucket Pipelines",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "Utilizando Googlemaps com Ionic 4",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "Navbar transparente no Ionic 3",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "Escopo de variáveis em Java",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
  {
    title: "Apresentação do Blog!",
    description:
      "Velit est id deserunt laborum cupidatat duis amet. Elit excepteur id anim fugiat in dolore ea voluptate exercitation do. Veniam ut nisi esse elit id do magna commodo sint. Minim ea eiusmod aute labore exercitation. Est aute incididunt elit tempor id ad.",
    time: "2019, May 12 - 2 minute read",
  },
]

const ArticleList = () => (
  <S.ArticleListWrapper>
    {mock.map(({ title, description, time }, index) => (
      <li key={index}>
        <ArticleItem title={title} description={description} time={time} />
        <S.ArticleDivider />
      </li>
    ))}
  </S.ArticleListWrapper>
)

export default ArticleList
