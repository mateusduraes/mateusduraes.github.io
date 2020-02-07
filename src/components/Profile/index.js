import React from "react"
import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => (
  <S.ProfileWrapper>
    <Avatar />
    <S.ProfileLink to="/">
      <S.ProfileName>Mateus Durāes</S.ProfileName>
      <S.ProfilePosition>FullStack JavaScript Engineer</S.ProfilePosition>
    </S.ProfileLink>
    <S.ProfileDivider />
    <S.ProfileDescription>
      Duis aliqua officia qui enim deserunt ex cillum sit Lorem. Culpa
      incididunt velit id dolore commodo minim et quis esse ea cillum irure.
      Culpa occaecat mollit amet pariatur id.
    </S.ProfileDescription>
    <S.ProfileDivider shorten />
  </S.ProfileWrapper>
)

export default Profile
