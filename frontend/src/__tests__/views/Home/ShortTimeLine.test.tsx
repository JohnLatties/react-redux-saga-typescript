import { render } from '../../utils/Provider'
import store from '../../../app/store'
import { actions } from '../../../app/careRecipient/reducers'
import sleep from '../../utils/sleep'
import { careRecipient } from '../../utils/mocks'
import ShortTimeLine from '../../../views/Home/ShortTimeLine'

describe('<ShortTimeLine/>', () => {
  it('Should render <ShortTimeLine/> correctly', async () => {
    store.dispatch(actions.setCareRecipient(careRecipient.validId))
    const utils = render(<ShortTimeLine />)
    await sleep()

    expect(utils.getAllByRole('event-card').length).toBe(10)
    expect(utils.getByText('See all', { selector: 'button' }))
  })
})
