import React from "react"

import Profile from "../Profile"
import Contact from "../Contact"
import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <Contact />
  </S.SidebarWrapper>
)

export default Sidebar
