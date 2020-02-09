import styled from "styled-components"
import { Link } from "gatsby"

export const PagerContainer = styled.div`
  margin: 1.5rem 3.75rem;
  display: flex;
  align-items: center;
`

export const PagerLink = styled(Link)`
  font-weight: 700;
  text-shadow: none;
  letter-spacing: 1px;
  border: 1px solid rgba(11, 132, 145, 1);
  border-radius: 8px;
  padding: 8px;
  font-size: 0.7rem;
  color: rgba(11, 132, 145, 1);
  text-decoration: none;
  transition: all 300ms ease;
  &:hover {
    color: #fff;
    background: rgba(11, 132, 145, 1);
  }
`
