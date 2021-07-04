import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 420px;
  padding: 5px;
  width: 100%;
  height: 100px;

  @media (min-width: 520px) {
    max-width: 480px;
  }
`

export const Image = styled.img`
  object-fit: contain;
  width: 85px;

  @media (min-width: 520px) {
    width: 100px;
  }
`
