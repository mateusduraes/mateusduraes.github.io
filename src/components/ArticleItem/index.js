import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const ArticleItem = ({ title, description, time, link }) => (
  <S.ArtileItemWrapper to={link}>
    <S.ArticleTitle>{title}</S.ArticleTitle>
    <S.ArticleDescription>{description}</S.ArticleDescription>
    <S.ArticleTimeInformation>{time}</S.ArticleTimeInformation>
  </S.ArtileItemWrapper>
)

ArticleItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default ArticleItem
