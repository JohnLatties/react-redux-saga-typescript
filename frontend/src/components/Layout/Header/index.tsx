import { removeCareRecipient } from '../../../app/careRecipient/reducers'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import * as S from './styles'
const Header = () => {
  const isLogged = useAppSelector((state) => state.careRecipente.isLogged)
  const dispach = useAppDispatch()

  function handleLogout() {
    dispach(removeCareRecipient())
  }
  return (
    <S.Container role="header">
      <S.Content>
        <S.Logo alt="Logo" src="/assets/images/logo.svg" />
        <S.Menu>
          {isLogged && (
            <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
          )}
        </S.Menu>
      </S.Content>
    </S.Container>
  )
}

export default Header
