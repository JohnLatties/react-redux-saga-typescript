import styled from 'styled-components'
import Button from '../../Button'

export const Container = styled.header`
  display: flex;
  flex: 0 0 auto;
  height: ${({ theme }) => theme.header.height};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 110px;
  object-fit: contain;
`

export const Menu = styled.nav`
  display: flex;
  width: 100px;
`

export const LogoutButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secundary};
    background-color: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.white};
  }
`
