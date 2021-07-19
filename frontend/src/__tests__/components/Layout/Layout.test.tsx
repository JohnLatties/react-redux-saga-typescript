import Layout from '../../../components/Layout'
import { render } from '../../utils/Provider'

describe('<Layout/>', () => {
  it('Should render <Layout/> correctly', () => {
    const { container, getByText } = render(
      <Layout>
        <div>Content</div>
      </Layout>
    )

    expect(getByText(/Content/)).toBeVisible()

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="sc-gKAaRy jdjPfJ"
      >
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
        <div
          class="sc-iCoGMd cmrYjU"
        >
          <div>
            Content
          </div>
        </div>
      </main>
    `)
  })
})
