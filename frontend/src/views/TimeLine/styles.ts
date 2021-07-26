import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: fit-content;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  width: 100%;
  max-width: 1200px;
  padding: 12px;
`
export const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  padding: 12px;
  flex: 0 0 auto;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.secundary};
    cursor: pointer;
  }
`

export const ListArea = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 12px;
`

export const ListFooter = styled.div`
  width: 80%;
  align-self: center;
  height: 1.5px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 30px;
`
