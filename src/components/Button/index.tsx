import { FC } from 'react'
import * as S from './styles'
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = ({ variant = 'primary' }) => {
  return <S.ButtonContainer variant={variant}>Enviar</S.ButtonContainer>
}
