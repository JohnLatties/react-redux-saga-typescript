import styled from 'styled-components'
import Button from '../../../components/Button'
import { ThemeProps } from '../../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  max-width: 400px;
  width: 100%;
  justify-content: space-around;
  padding: 12px;
`

export const Input = styled.input`
  border: none;
  border-radius: 6px;
  height: 50px;
  max-width: 250px;
  width: 100%;
  padding: 10px;
  font-size: 25px;
  outline: none;
  margin-right: 16px;
`

interface ButtonProps extends ThemeProps {
  disabled: boolean
}

export const FormButton = styled(Button)<ButtonProps>`
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
  width: 90px;
  height: 50px;
  outline: none;
  border: none;
  background-color: ${({ theme, disabled }) =>
    disabled ? `${theme.colors.accent}60` : theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
    background-color: ${({ theme, disabled }) =>
      disabled ? `${theme.colors.accent}60` : theme.colors.primary};
  }
`

export const Image = styled.img`
  object-fit: contain;
  max-width: 320px;
  width: 100%;
`

export const ErroArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  width: 100%;
`

export const ErroText = styled.span`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.danger};
`
