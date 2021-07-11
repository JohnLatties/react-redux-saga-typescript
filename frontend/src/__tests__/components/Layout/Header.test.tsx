import { actions } from '../../../app/careRecipient/reducers'
import store from '../../../app/store'
import Header from '../../../components/Layout/Header'
import { render } from '../../utils/Provider'

describe('<Header/>', () => {
  it('Should render <Header/> correctly', () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toHaveStyle(
      `background-color: rgb(255, 255, 255)`
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <header
        class="sc-gtsrHT bcGMyW"
        role="header"
      >
        <div
          class="sc-dlnjwi NklDU"
        >
          <img
            alt="Logo"
            class="sc-hKFxyN bbMcYl"
            src="/assets/images/logo.svg"
          />
          <nav
            class="sc-eCApnc dbqiIu"
          />
        </div>
      </header>
    `)
  })

  it('Should render a Logo image', () => {
    const { getByAltText } = render(<Header />)

    expect(getByAltText('Logo')).toBeDefined()
  })

  it('should show logout button when logged in state is true', () => {
    const utils = render(<Header />)

    const careRecipenteId = '1233343423'
    store.dispatch(actions.setCareRecipient(careRecipenteId))

    expect(utils.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  })
})
