import LastConcern from './LastConcern'
import MainObservations from './MainObservations'
import MoodChart from './MoodChart'
import ShortTimeLine from './ShortTimeLine'

import * as S from './styles'

const HomeView = () => {
  return (
    <S.Container>
      <S.Content id="home-Content">
        <S.ChartContainer id="ChartContainer">
          <MainObservations />
          <MoodChart />
        </S.ChartContainer>
        <S.ListContainer id="ListContainer">
          <LastConcern />
          <ShortTimeLine />
        </S.ListContainer>
      </S.Content>
    </S.Container>
  )
}

export default HomeView
