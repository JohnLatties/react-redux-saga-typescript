import { render } from '../../utils/Provider'
import LastConcern from '../../../views/Home/LastConcern'
import { careRecipient } from '../../utils/mocks'
import store from '../../../app/store'
import { actions } from '../../../app/careRecipient/reducers'
import sleep from '../../utils/sleep'

const makeSUT = () => {
  const utils = render(<LastConcern />)
  return {
    utils
  }
}

describe('<LastConcern/>', () => {
  it('Should render <LastConcern/> correctly', async () => {
    store.dispatch(actions.setCareRecipient(careRecipient.validId))
    await sleep()

    const { utils } = makeSUT()
    expect(
      utils.getByText('Last concern rasied', { selector: 'h2' })
    ).toBeInTheDocument()
  })
})
