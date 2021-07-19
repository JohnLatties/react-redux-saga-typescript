import { IconType } from 'react-icons'
import { IoFastFoodSharp } from 'react-icons/io5'
import { BiImageAlt } from 'react-icons/bi'
import { RiUserHeartFill } from 'react-icons/ri'
import { GiMedicines } from 'react-icons/gi'
import { GiWaterBottle } from 'react-icons/gi'

export type ObservationEventType =
  | 'mood'
  | 'food-intake'
  | 'fluid-intake'
  | 'regular-medication'
  | 'default'

export interface MainEventCardItem {
  type: ObservationEventType
  title: string
  icon: IconType
}

export const mainEventsCard = [
  {
    type: 'default',
    title: '-',
    icon: BiImageAlt
  },
  {
    type: 'mood',
    icon: RiUserHeartFill,
    title: 'Mood'
  },
  {
    type: 'food-intake',
    icon: IoFastFoodSharp,
    title: 'Food intake'
  },
  {
    type: 'fluid-intake',
    icon: GiWaterBottle,
    title: 'Fluid intake'
  },
  {
    type: 'regular-medication',
    icon: GiMedicines,
    title: 'Regular medication'
  }
] as MainEventCardItem[]

export interface ObservationDetailItem {
  description: string
  timestamp: Date | string
}

export interface ObservationDetail {
  itens: ObservationDetailItem[]
  total: number
}

export interface MainObservationsState {
  regularMedication: ObservationDetail
  fluidIntake: ObservationDetail
  foodIntake: ObservationDetail
  mood: ObservationDetail
}
