import { render } from '../../utils/Provider'
import MainObservations from '../../../views/Home/MainObservations'
import { careRecipient } from '../../utils/mocks'
import store from '../../../app/store'
import { actions } from '../../../app/careRecipient/reducers'

const makeSUT = () => {
  const utils = render(<MainObservations />)
  const eventCards = utils.getAllByRole('event-card')
  return {
    utils,
    eventCards
  }
}

describe('<MainObservations/>', () => {
  it('Should render <MainObservations/> correctly', () => {
    store.dispatch(actions.setCareRecipient(careRecipient.validId))

    const { utils, eventCards } = makeSUT()
    expect(
      utils.getByText('Main Observations', { selector: 'h2' })
    ).toBeInTheDocument()

    expect(eventCards.length).toBe(4)
  })
})
