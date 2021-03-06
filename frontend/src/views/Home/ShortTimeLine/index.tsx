import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Title from '../../../components/Title'
import Button from '../../../components/Button'
import EventCard from '../../../components/EventCard'
import { eventsReset } from '../../../app/observationEvents/reducers'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getObservationEvents } from '../../../app/observationEvents/actions'

import NoEvents from '../../../components/NoEvents'
import * as S from './styles'

function ShortTimeLine() {
  const { id: careRecipientId } = useAppSelector((state) => state.careRecipente)
  const {
    data: events,
    perPage,
    loading
  } = useAppSelector((state) => state.observationEvents.events)
  const dispatch = useAppDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(eventsReset())
    dispatch(getObservationEvents({ careRecipientId, perPage, page: 1 }))
  }, [dispatch, careRecipientId, perPage])

  function handleSeeAll() {
    history.push('/time-line')
  }

  return (
    <S.Container>
      <Title>Observation time line</Title>
      <S.Content>
        <S.ListArea>
          {events.map((ev, i) => (
            <EventCard
              key={`event-cart-${i}`}
              event={ev.eventType}
              timestamp={ev.timestamp}
              note={ev.note}
            />
          ))}
          {loading && <NoEvents>...</NoEvents>}
          {!events.length && !loading && <NoEvents>No Events</NoEvents>}
        </S.ListArea>
        <S.ActionArea>
          <Button onClick={handleSeeAll}>See all</Button>
        </S.ActionArea>
      </S.Content>
    </S.Container>
  )
}

export default ShortTimeLine
