import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getMainObservations } from '../../../app/mainObservations/actions'
import ObservationCard from '../../../components/ObservationCard'
import Title from '../../../components/Title'
import * as S from './styles'

function MainOberservations() {
  const { id: careRecipientId } = useAppSelector((state) => state.careRecipente)
  const { fluidIntake, foodIntake, regularMedication, mood } = useAppSelector(
    (state) => state.mainObservations
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMainObservations(careRecipientId))
  }, [careRecipientId, dispatch])

  return (
    <S.Container>
      <Title>Main Observations</Title>
      <S.Content>
        <ObservationCard type="food-intake" mainEvents={foodIntake} />
        <ObservationCard
          type="regular-medication"
          mainEvents={regularMedication}
        />
        <ObservationCard type="fluid-intake" mainEvents={fluidIntake} />
        <ObservationCard type="mood" mainEvents={mood} />
      </S.Content>
    </S.Container>
  )
}

export default MainOberservations
