import Header from './Header'
import * as S from './styles'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <S.Main>
      <Header />
      <S.Container>{children}</S.Container>
    </S.Main>
  )
}

export default Layout
