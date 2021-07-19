import { RowDataPacket } from 'mysql2'

export enum EventType {
  regularMedication = 'regular_medication_taken',
  fluidIntake = 'fluid_intake_observation',
  foodIntake = 'food_intake_observation',
  Mood = 'mood_observation'
}

interface ObservationDetailItem {
  description: string
  timestamp: Date
}

export interface ObservationDetail {
  itens: ObservationDetailItem[]
  total: number
}

export interface MainObservations {
  regularMedication : ObservationDetail
  fluidIntake : ObservationDetail
  foodIntake : ObservationDetail
  mood : ObservationDetail
}

const selectEventData = (
  eventType : EventType,
  data: RowDataPacket[],
  fn : (value: any) => ObservationDetailItem
) => data
    .filter(i => i.event_type === eventType)
    .map(i => fn(i.payload) )


    
function selectRegularMedication (
  eventType : EventType,
  data: RowDataPacket[]
) {
  return selectEventData(
    eventType,
    data,
    (value: any) => ({ description: `${value.note || '-'}`, timestamp: value.timestamp }))
  }

function selectFluidIntake (
  eventType : EventType,
  data: RowDataPacket[]
) {
  return selectEventData(
    eventType,
    data,
    (value: any)  => ({ description: `${value.fluid} (${value.consumed_volume_ml}ml)`, timestamp:  value.timestamp }))
  }

function selectFoodIntake (
  eventType : EventType,
  data: RowDataPacket[]
) {
  return selectEventData(
    eventType,
    data,
    (value: any)  => ({ description: `${value.meal} ${value.note}`, timestamp:  value.timestamp }))
  }

function selectMood (
  eventType : EventType,
  data: RowDataPacket[]
) {
  return selectEventData(
    eventType,
    data,
    (value: any)  => ({ description: `${value.mood} ${value.note? `(${value.note})`: '' }`, timestamp:  value.timestamp }))
  }
      
      
export function parserTo(eventType : EventType, data: RowDataPacket[], totalEvents : RowDataPacket[]): ObservationDetail {
  const selectTotal = (eventType : EventType) =>  totalEvents.find(t => t.event_type === eventType)

    switch (eventType) {
      case EventType.regularMedication:
        return { itens: selectRegularMedication(eventType, data), total : selectTotal(eventType)?.total || 0 }
      case EventType.fluidIntake:
        return { itens: selectFluidIntake(eventType, data), total : selectTotal(eventType)?.total || 0 }
      case EventType.foodIntake:
        return { itens: selectFoodIntake(eventType, data), total : selectTotal(eventType)?.total || 0 }
      case EventType.Mood:
        return { itens: selectMood(eventType, data), total : selectTotal(eventType)?.total || 0 }
      default:
        return { itens: [] as ObservationDetailItem[], total: 0};
    }
}

