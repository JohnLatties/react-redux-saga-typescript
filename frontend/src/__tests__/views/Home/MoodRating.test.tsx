import { render } from '../../utils/Provider'
import MoodChart from '../../../views/Home/MoodChart'
import { careRecipient } from '../../utils/mocks'
import store from '../../../app/store'
import { actions } from '../../../app/careRecipient/reducers'
import sleep from '../../utils/sleep'

const makeSUT = () => {
  const utils = render(<MoodChart />)
  return {
    utils
  }
}

describe('<MoodChart/>', () => {
  it('Should render <MoodChart/> correctly', async () => {
    store.dispatch(actions.setCareRecipient(careRecipient.validId))
    await sleep()

    const { utils } = makeSUT()
    expect(
      utils.getByText('Mood rating', { selector: 'h2' })
    ).toBeInTheDocument()
  })
})
