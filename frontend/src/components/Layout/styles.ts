import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  height: calc(100vh - ${({ theme }) => theme.header.height});
`
