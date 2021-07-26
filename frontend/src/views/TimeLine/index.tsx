import { useState, useEffect } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getObservationEvents } from '../../app/observationEvents/actions'
import { eventsReset } from '../../app/observationEvents/reducers'
import EventCard from '../../components/EventCard'
import NoEvents from '../../components/NoEvents'
import Title from '../../components/Title'
import * as S from './styles'

function TimeLineView() {
  const [currentPage, setCurrentPage] = useState(0)
  const { id: careRecipientId } = useAppSelector((state) => state.careRecipente)
  const {
    data: events,
    perPage,
    loading
  } = useAppSelector((state) => state.observationEvents.events)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (currentPage) {
      dispatch(
        getObservationEvents({ careRecipientId, perPage, page: currentPage })
      )
    } else {
      dispatch(eventsReset())
    }
  }, [dispatch, careRecipientId, perPage, currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1)
      }
    })
    intersectionObserver.observe(document.querySelector('#sentinel') as Element)
    return () => intersectionObserver.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const history = useHistory()
  function handleBacktoHome() {
    history.push('/')
  }

  return (
    <S.Container>
      <S.Content>
        <S.TitleArea>
          <IoMdArrowRoundBack onClick={handleBacktoHome} />
          <Title>Time line </Title>
        </S.TitleArea>
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
          <S.ListFooter id="sentinel" />
        </S.ListArea>
      </S.Content>
    </S.Container>
  )
}

export default TimeLineView
