import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Pager = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPageLink,
  nextPageLink,
}) => {
  return (
    <div>
      {!isFirst && (
        <Link to={prevPageLink} rel="prev">
          ← Previous page
        </Link>
      )}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && (
        <Link to={nextPageLink} rel="next">
          Next page →
        </Link>
      )}
    </div>
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
