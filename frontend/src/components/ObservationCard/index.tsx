import { memo, useEffect, useState } from 'react'
import { BsCollectionFill } from 'react-icons/bs'
import ReactTooltip from 'react-tooltip'
import * as S from './styles'
import {
  MainEventCardItem,
  mainEventsCard,
  ObservationDetail,
  ObservationEventType
} from '../../app/mainObservations/models'
import formatTimeAgo from '../../utils/formatTimeAgo'

interface ObservationCardProps {
  type: ObservationEventType
  mainEvents: ObservationDetail
}

function ObservationCard({ type, mainEvents }: ObservationCardProps) {
  const [eventItem, setEventItem] = useState<MainEventCardItem | undefined>(
    mainEventsCard.find((event) => event.type === 'default')
  )

  useEffect(() => {
    const cardItem = mainEventsCard.find((item) => item.type === type)
    setEventItem(cardItem as MainEventCardItem)
  }, [eventItem, type, mainEvents])

  return (
    <S.Container role="event-card" className={eventItem?.type}>
      <S.Header>
        {eventItem && <eventItem.icon />}
        <h3 className="title">{eventItem?.title}</h3>
      </S.Header>
      <S.Footer>
        <div>
          <h2>{mainEvents.total}</h2>
          <span>Events</span>
        </div>
        <a
          data-tip="custom show"
          data-for={`tooltip-${type}`}
          data-event="click focus"
        >
          <BsCollectionFill />
        </a>
        <ReactTooltip
          id={`tooltip-${type}`}
          globalEventOff="click"
          place="top"
          effect="solid"
        >
          <S.TooltipArea>
            <h3>Last events:</h3>
            <>
              {mainEvents.itens.map(({ description, timestamp }, key) => (
                <p key={`${type}-${key}`} style={{ fontSize: '10px' }}>
                  {description}
                  {'  -  '}
                  {formatTimeAgo(timestamp)}
                </p>
              ))}
            </>
          </S.TooltipArea>
        </ReactTooltip>
      </S.Footer>
    </S.Container>
  )
}

export default memo(ObservationCard)
