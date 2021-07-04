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
        class="sc-eCApnc iHOios"
      >
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
        <div
          class="sc-jSFjdj dXaepd"
        >
          <div>
            Content
          </div>
        </div>
      </main>
    `)
  })
})
