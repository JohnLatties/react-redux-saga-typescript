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
        class="sc-bdnxRM khWsj"
        role="header"
      >
        <div
          class="sc-gtsrHT ggMHFI"
        >
          <img
            alt="Logo"
            class="sc-dlnjwi gHNWPx"
            src="/assets/images/logo.svg"
          />
          <nav
            class="sc-hKFxyN cDnlTy"
          />
        </div>
      </header>
    `)
  })

  it('Should render a Logo image', () => {
    const { getByAltText } = render(<Header />)

    expect(getByAltText('Logo')).toBeDefined()
  })
})
