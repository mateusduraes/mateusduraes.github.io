import styled from "styled-components"

export const ContactWrapper = styled.nav`
  width: 100%;
`

export const ContactLabel = styled.p`
  position: relative;
  color: var(--primaryContrast);
  font-weight: 400;
  font-size: 12px;
  margin: 0 0 5px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;

  &::before {
    content: "";
    display: block;
    height: 2px;
    width: calc(50% - 48px);
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    left: 0;
    background-color: var(--tertiary);
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: calc(50% - 48px);
    position: absolute;
    top: 50%;
    right: 0;
    background-color: var(--tertiary);
  }
`

export const ContactIconsList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none !important;
  margin-top: 1rem;
  a {
    color: var(--primaryContrast);
    text-decoration: none;
    transition: color 300ms ease;
    &:hover {
      color: var(--tertiary);
    }
  }
`

export const ContactIconContainer = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`

export const Divider = styled.hr`
  width: 100%;
  margin: 16px auto;
  border: 1px solid var(--tertiary);
  color: var(--tertiary);
`

export const ContactName = styled.h3`
  color: var(--primaryContrast);
  text-align: center;
  margin-top: 1rem;
`
