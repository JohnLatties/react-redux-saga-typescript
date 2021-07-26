import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: fit-content;
  width: 100%;

  @media (min-width: 768px) {
    height: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const BaseContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  margin-bottom: 12px;
  min-height: 400px;

  @media (min-width: 768px) {
    height: 100%;
    width: calc(50% - 10px);
  }
`

export const ChartContainer = styled(BaseContainer)`
  justify-content: space-between;
  @media (min-width: 768px) {
    width: calc(55% - 10px);
  }
`

export const ListContainer = styled(BaseContainer)`
  @media (min-width: 768px) {
    width: calc(45% - 10px);
    justify-content: space-between;
  }
`
