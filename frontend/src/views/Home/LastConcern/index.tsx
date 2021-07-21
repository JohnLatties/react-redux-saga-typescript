import Title from '../../../components/Title'
import { RiAlarmWarningFill } from 'react-icons/ri'
import * as S from './styles'
import NoEvents from '../../../components/NoEvents'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useEffect } from 'react'
import { getLastConcern } from '../../../app/observationEvents/actions'
import formatTimeAgo from '../../../utils/formatTimeAgo'

function LastConcern() {
  const { id: careRecipientId } = useAppSelector((state) => state.careRecipente)
  const { data, loading } = useAppSelector(
    (state) => state.observationEvents.lastConcernEvent
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLastConcern(careRecipientId))
  }, [careRecipientId, dispatch])
  return (
    <S.Container>
      <Title>Last concern rasied</Title>
      <S.Content>
        <S.IconArea>
          <RiAlarmWarningFill />
        </S.IconArea>
        <S.ContentArea>
          {loading && <NoEvents>...</NoEvents>}
          {!loading && !data && <NoEvents> No events</NoEvents>}
          {!loading && data && (
            <S.DescriptionArea>
              <S.Description>{`${data.severity}: ${data.note}`}</S.Description>
              <S.Description>{formatTimeAgo(data.timestamp)}</S.Description>
            </S.DescriptionArea>
          )}
        </S.ContentArea>
      </S.Content>
    </S.Container>
  )
}

export default LastConcern
