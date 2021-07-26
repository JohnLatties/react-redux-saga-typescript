import Benefits from './Benefits'
import Form from './Form'
import * as S from './styles'

const LoginView = () => {
  return (
    <S.Container>
      <S.Content>
        <Benefits />
        <S.Title>Family app</S.Title>
        <Form />
      </S.Content>
    </S.Container>
  )
}

export default LoginView
