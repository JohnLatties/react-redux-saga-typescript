import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  padding: 12px;
  min-height: 450px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  @media (min-width: 768px) {
    height: calc(80% - 10px);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  padding: 8px;
`

export const ListArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  height: 100%;

  overflow-y: scroll;
  padding-top: 20px;
`

export const ActionArea = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3px;
`
