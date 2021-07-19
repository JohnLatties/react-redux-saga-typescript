import { render } from '../../utils/Provider'
import { mainObservations } from '../../utils/mocks'
import ObservationCard from '../../../components/ObservationCard'

describe('<ObservationCard/>', () => {
  it('Should render <ObservationCard/> correctly', () => {
    const util = render(
      <ObservationCard
        type="food-intake"
        mainEvents={mainObservations.foodIntake}
      />
    )

    expect(util.getByText('Food intake')).toBeDefined()
  })

  it('Should render all information in the card', () => {
    const util = render(
      <ObservationCard type="mood" mainEvents={mainObservations.mood} />
    )

    expect(util.getByText('Mood')).toBeDefined()

    expect(util.getByText(mainObservations.mood.total)).toBeDefined()
    expect(util.getByText('Events')).toBeDefined()
  })
})
