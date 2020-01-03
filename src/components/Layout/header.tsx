import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export interface CoreHeaderProps {
  children: any
}

const HeaderContainer = styled.div`
  display: flex;
  ${({ theme }) => `
    background-color: ${theme.colors.primary.default};
    color: ${theme.colors.white.hover};
  `}
`

const HeaderContent = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: inherit;

  @media (min-width: 720px) {
    max-width: 500px;
  }
`

const Header: FC<CoreHeaderProps> = ({ children }) => {
  return (
    <HeaderContainer>
      <HeaderContent>{children}</HeaderContent>
    </HeaderContainer>
  )
}

export default Header
