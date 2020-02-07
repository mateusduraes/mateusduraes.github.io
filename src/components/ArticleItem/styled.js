import styled from "styled-components"
import { Link } from "gatsby"

export const ArtileItemWrapper = styled(Link)`
  text-decoration: none;
  color: var(--secondaryContrast);
`

export const ArticleTitle = styled.h2`
  transition: color 300ms ease;
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin-bottom: 1rem;
  &:hover {
    color: var(--tertiary);
  }
`

export const ArticleDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #999;
`

export const ArticleTimeInformation = styled.time`
  font-size: 0.8rem;
  color: #ccc;
`
