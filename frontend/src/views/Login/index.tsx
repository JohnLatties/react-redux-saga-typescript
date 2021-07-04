import Layout from '../../components/Layout'
import Benefits from './Benefits'
import Form from './Form'
import * as S from './styles'

const LoginView = () => {
  return (
    <Layout>
      <S.Container>
        <S.Content>
          <Benefits />
          <S.Title>Family Platform</S.Title>
          <Form />
        </S.Content>
      </S.Container>
    </Layout>
  )
}

export default LoginView
