import request from 'supertest'
import app from '../../main/api'

jest.mock('../../infra/data/repository/MoodEventsRepository')

describe('Mood Events Api', () => {
  it('Should return 404 if not found a care recipient by id', async (done) => {
    const careRecipientId = 'invalid'
    await request(app)
      .get(`/care-recipients/${careRecipientId}/mood-events`)
      .expect(404)
      .then(({ body }) => {
        expect(body.error).toBe('id not found')
      })
    done()
  })

  it('Should return 200 if find a care recipient by id', async (done) => {
    const careRecipientId = 'e3e2bff8-d318-4760-beea-841a75f00227'
    await request(app)
      .get(`/care-recipients/${careRecipientId}/mood-events`)
      .expect(200)
      .then(({ body }) => {
        expect(body.length).toBe(3)
      })
    done()
  })
})
