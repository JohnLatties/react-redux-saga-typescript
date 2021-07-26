import { RiCalendarEventFill } from 'react-icons/ri'
import { MdEventNote } from 'react-icons/md'
import ReactTooltip from 'react-tooltip'

import * as S from './styles'
import { getEventTypeText } from '../../utils/text'
import formatTimeAgo from '../../utils/formatTimeAgo'

interface EventCardProps {
  event: string
  timestamp: string | Date
  note: string | null
}

function EventCard({ event, note, timestamp }: EventCardProps) {
  return (
    <S.Container role="event-card">
      <S.IconArea>
        <RiCalendarEventFill />
      </S.IconArea>
      <S.DescriptionArea>
        <span data-tip data-for={`${event}-${timestamp}`}>
          {`${getEventTypeText(event)} - ${formatTimeAgo(timestamp)}`}
        </span>
        <ReactTooltip id={`${event}-${timestamp}`}>
          <span>{new Date(timestamp).toLocaleString()}</span>
        </ReactTooltip>
      </S.DescriptionArea>
      <S.ActionArea>
        {note && (
          <>
            <span
              data-tip="custom show"
              data-for={`note-${event}-${timestamp}`}
              data-event="click focus"
            >
              <MdEventNote />
            </span>
            <ReactTooltip
              id={`note-${event}-${timestamp}`}
              globalEventOff="click"
              place="top"
              effect="solid"
            >
              <span>{note}</span>
            </ReactTooltip>
          </>
        )}
      </S.ActionArea>
    </S.Container>
  )
}

export default EventCard
