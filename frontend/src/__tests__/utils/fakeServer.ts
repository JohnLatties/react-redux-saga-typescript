import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { careRecipient, mainObservations, moodEvents } from './mocks'

const server = setupServer(
  rest.get(
    `http://localhost/care-recipients/${careRecipient.validId}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ id: careRecipient.validId }))
    }
  ),
  rest.get(
    `http://localhost/care-recipients/${careRecipient.invalidId}`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json('not found'))
    }
  ),
  rest.get(
    `http://localhost/care-recipients/${careRecipient.validId}/main-observations`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ ...mainObservations }))
    }
  ),
  rest.get(
    `http://localhost/care-recipients/${careRecipient.invalidId}/main-observations`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json('not found'))
    }
  ),
  rest.get(
    `http://localhost/care-recipients/${careRecipient.validId}/mood-events`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(moodEvents))
    }
  ),
  rest.get(
    `http://localhost/care-recipients/${careRecipient.invalidId}/mood-events`,
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
