import styled from 'styled-components'

const Button = styled.button`
  border-radius: 6px;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
  width: 90px;
  height: 50px;
  outline: none;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
`

export default Button
