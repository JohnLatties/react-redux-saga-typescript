import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 48%;
  width: 100%;
  min-height: 360px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  @media (min-width: 768px) {
    min-height: 380px;
  }
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  canvas {
    max-width: 320px;
    max-height: 320px;
  }
`
