import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: none;
  justify-content: space-between;
  width: 100%;
  padding: 5px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 3px 0 rgb(0 0 0 / 20%);
  color: black;
  height: 100px;
  margin: 5px 0;
  font-size: 14px;
  border: 1px solid;
`

export const IconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;

  svg {
    font-size: 24px;
  }
`

export const DescriptionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
`

export const ActionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  svg {
    cursor: pointer;
    font-size: 24px;
  }
`
