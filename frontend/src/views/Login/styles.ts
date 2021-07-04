import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/assets/images/teal-squiggle.svg');
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 860px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 20px;

  @media (min-width: 520px) {
    padding-top: 20px;
    max-height: 600px;
  }
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  @media (min-width: 520px) {
    margin-top: 30px;
    font-size: ${({ theme }) => theme.fontSizes[6]}px;
  }
`
