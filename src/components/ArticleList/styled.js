import styled from "styled-components"

export const ArticleListWrapper = styled.ul`
  font-family: "Roboto Slab", serif;
  margin: 0 3.7rem;
  li:not(:first-child) {
    margin: 2.5rem 0;
  }
`

export const ArticleDivider = styled.hr`
  width: 100%;
  margin: 16px 0;
  border: 1px solid var(--tertiary);
  color: var(--tertiary);
`
