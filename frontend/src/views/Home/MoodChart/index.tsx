import { useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getMoodEvents } from '../../../app/moodRating/actions'
import NoEvents from '../../../components/NoEvents'
import { Title } from '../../../components/Title'
import * as S from './styles'

interface ChartDataset {
  label: string
  data: number[]
  backgroundColor: string[]
  borderWidth: number
}

interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

const data: ChartData = {
  labels: [],
  datasets: [
    {
      label: '# mood',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderWidth: 1
    }
  ]
}

function MoodChart() {
  const [chartData, setChartData] = useState({ ...data })
  const { id: careRecipientId } = useAppSelector((state) => state.careRecipente)
  const { moodEvents } = useAppSelector((state) => state.moodRating)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMoodEvents(careRecipientId))
  }, [careRecipientId, dispatch])

  useEffect(() => {
    const newChartData = { ...data }
    newChartData.labels = moodEvents.map((event) => event.mood)
    newChartData.datasets[0].data = moodEvents.map((event) => event.total)
    setChartData(newChartData)
  }, [moodEvents])

  return (
    <S.Container>
      <Title>Mood rating</Title>
      <S.Content>
        {chartData.labels.length && (
          <PolarArea type="polarArea" data={chartData} />
        )}
        {!chartData.labels.length && <NoEvents>No events</NoEvents>}
      </S.Content>
    </S.Container>
  )
}

export default MoodChart
