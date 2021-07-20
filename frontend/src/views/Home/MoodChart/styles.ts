import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 48%;
  width: 100%;
  padding: 16px;
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  canvas {
    max-width: 350px;
    max-height: 350px;
  }
`

export const NoEvents = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`
