import React from "react"

import links from "./content"
import Icons from "./Icons"

import * as S from "./styled"

const Contact = () => {
  const year = new Date().getFullYear()

  return (
    <S.ContactWrapper>
      <S.ContactLabel>Contact me</S.ContactLabel>
      <S.ContactIconsList>
        {links.map((link, i) => {
          const Icon = Icons[link.label]

          return (
            <li key={i}>
              <a href={link.url} title={link.label} target="_blank">
                <S.ContactIconContainer>
                  <Icon />
                </S.ContactIconContainer>
              </a>
            </li>
          )
        })}
      </S.ContactIconsList>
      <S.Divider />
      <S.ContactName> {year} © Mateus Durães</S.ContactName>
    </S.ContactWrapper>
  )
}

export default Contact
