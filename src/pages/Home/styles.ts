import styled from 'styled-components'

export const HomeContainer = styled.main`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`

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

export const CountdownContainer = styled.div`
  color: ${({ theme }) => theme['gray-100']};
  display: flex;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  gap: 1rem;
  line-height: 8rem;
  align-items: center;

  span {
    border-radius: 8px;
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
  }
`
export const Separator = styled.div`
  color: ${({ theme }) => theme['green-500']};
  padding: 2rem 0;
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const StartCountdownButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  gap: 0.5rem;
  justify-content: center;

  padding: 1rem;
  transition: background 0.2s;
  width: 100%;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
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
