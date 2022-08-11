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

export const BaseCountdownButton = styled.button`
  align-items: center;
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-100']};
  cursor: pointer;
  display: flex;
  font-weight: bold;
  gap: 0.5rem;
  justify-content: center;

  padding: 1rem;
  transition: background 0.2s;
  width: 100%;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme['green-500']};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme['green-700']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme['red-500']};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme['red-700']};
  }
`
