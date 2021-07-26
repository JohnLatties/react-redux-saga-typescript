import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 150px;
  height: calc(20% - 10px);
  padding: 12px;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  @media (min-width: 768px) {
    height: calc(20% - 10px);
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 5px;
`

export const IconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  background-color: rgba(255, 206, 86, 0.1);
  border: solid 3px rgba(255, 206, 86, 0.6);
  border-radius: 50%;

  svg {
    font-size: 32px;
    color: rgba(255, 206, 86, 1);
  }
`

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 85%;
`

export const DescriptionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 10px;
`

export const Description = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`
