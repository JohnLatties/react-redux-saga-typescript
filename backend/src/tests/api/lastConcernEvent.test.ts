import request from 'supertest'
import app from '../../main/api'

jest.mock('../../infra/data/repository/MoodEventsRepository')

describe('Last Concern Event Api', () => {
  it('Should return 404 if not found a care recipient by id', async (done) => {
    const careRecipientId = 'invalid'
    await request(app)
      .get(`/care-recipients/${careRecipientId}/last-concern`)
      .expect(404)
      .then(({ body }) => {
        expect(body.error).toBe('id not found')
      })
    done()
  })

  it('Should return 200 if find a care recipient by id', async (done) => {
    const careRecipientId = 'e3e2bff8-d318-4760-beea-841a75f00227'
    await request(app)
      .get(`/care-recipients/${careRecipientId}/last-concern`)
      .expect(200)
      .then(({ body }) => {
        expect(body.id).not.toBeNull()
        expect(body.note).not.toBeNull()
        expect(body.severity).not.toBeNull()
        expect(body.timestamp).not.toBeNull()
      })
    done()
  })
})
