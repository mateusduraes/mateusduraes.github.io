import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Pager = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPageLink,
  nextPageLink,
}) => {
  return (
    <S.PagerContainer>
      {!isFirst && (
        <S.PagerLink
          to={prevPageLink}
          rel="prev"
          style={{ marginRight: "1rem" }}
        >
          ← Previous page
        </S.PagerLink>
      )}
      <p>
        Page {currentPage} of {numPages}
      </p>
      {!isLast && (
        <S.PagerLink
          to={nextPageLink}
          rel="next"
          style={{ marginLeft: "1rem" }}
        >
          Next page →
        </S.PagerLink>
      )}
    </S.PagerContainer>
  )
}

Pager.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPageLink: PropTypes.string.isRequired,
  nextPageLink: PropTypes.string.isRequired,
}

export default Pager
