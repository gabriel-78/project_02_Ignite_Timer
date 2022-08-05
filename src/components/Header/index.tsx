import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'

import { Timer, Scroll } from 'phosphor-react'

export const Header: FC = () => {
  return (
    <S.HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
