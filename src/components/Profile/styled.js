import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.div`
  color: var(--primaryContrast);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  transition: color 300ms ease;
  color: var(--primaryContrast);
  text-decoration: none;

  &:hover {
    color: var(--tertiary);
  }
  margin-top: 1rem;
`

export const ProfileName = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
`

export const ProfilePosition = styled.p`
  font-size: 0.9rem;
  line-height: 1.3rem;
`

export const ProfileDivider = styled.hr`
  width: ${props => (props.shorten ? "20%" : "30%")};
  margin: 16px auto;
  border: 1px solid var(--tertiary);
  color: var(--tertiary);
`

export const ProfileDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.3rem;
`
