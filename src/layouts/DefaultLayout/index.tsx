import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import * as S from './style'

export const DefaultLayout: FC = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  )
}
