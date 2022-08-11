import styled from 'styled-components'

export const FormContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme['gray-100']};
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  color: ${({ theme }) => theme['gray-100']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  transition: all 0.3s;

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
