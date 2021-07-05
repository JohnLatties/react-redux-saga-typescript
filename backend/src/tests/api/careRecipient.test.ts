import request from 'supertest'
import app from '../../main/api'

jest.mock('../../infra/data/repository/CareRecipientRepository')

describe('Care Recipient Api', () => {
  it('Should return 404 if not found a care recipient by id', async (done) => {
    const careRecipientId = 'invalid'
    await request(app)
      .get(`/care-recipients/${careRecipientId}`)
      .expect(404)
      .then(({ body }) => {
        expect(body.error).toBe('id not found')
      })
    done()
  })

  it('Should return 200 if find a care recipient by id', async (done) => {
    const careRecipientId = 'e3e2bff8-qwer-ewerq'
    await request(app)
      .get(`/care-recipients/${careRecipientId}`)
      .expect(200)
      .then(({ body }) => {
        expect(body.id).toBe(careRecipientId)
      })
    done()
  })
})
