import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { caraRecipient } from './mocks'

const server = setupServer(
  rest.get(
    `http://localhost/care-recipients/${caraRecipient.validId}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ id: caraRecipient.validId }))
    }
  ),
  rest.get(
    `http://localhost/care-recipients/${caraRecipient.invalidId}`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json('not found'))
    }
  ),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`)
    return res(
      ctx.status(500),
      ctx.json({ error: 'You must add request handler.' })
    )
  })
)

beforeAll(() => {
  server.listen()
})
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

export { server }
