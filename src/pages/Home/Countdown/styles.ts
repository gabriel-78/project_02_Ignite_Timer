import styled from 'styled-components'

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
