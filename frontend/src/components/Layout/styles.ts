import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  overflow-y: scroll;
  min-height: 100%;
  height: calc(100vh - ${({ theme }) => theme.header.height});

  @media (min-width: 768px) {
    height: calc(100vh - ${({ theme }) => theme.header.height});
  }
`
