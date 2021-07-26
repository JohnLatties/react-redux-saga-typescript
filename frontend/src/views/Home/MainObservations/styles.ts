import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 48%;
  width: 100%;
  padding: 16px;

  min-height: 360px;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  @media (min-width: 768px) {
    min-height: 450px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`
