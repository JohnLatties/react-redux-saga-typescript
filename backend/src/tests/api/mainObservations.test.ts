import request from 'supertest'
import app from '../../main/api'

jest.mock('../../infra/data/repository/MainObservationRepository')

describe.only('Main Observations Api', () => {
  it('Should return 404 if not found a care recipient by id', async (done) => {
    const careRecipientId = 'invalid'
    await request(app)
      .get(`/care-recipients/${careRecipientId}/main-observations`)
      .expect(404)
      .then(({ body }) => {
        expect(body.error).toBe('id not found')
      })
    done()
  })

  it('Should return 200 if find a care recipient by id', async (done) => {
    const careRecipientId = 'e3e2bff8-d318-4760-beea-841a75f00227'
    await request(app)
      .get(`/care-recipients/${careRecipientId}/main-observations`)
      .expect(200)
      .then(({ body }) => {

        expect(body.regularMedication.itens.length).toBe(3)
        expect(body.regularMedication.total).toBe(10)

        expect(body.fluidIntake.itens.length).toBe(3)
        expect(body.fluidIntake.total).toBe(11)
        
        expect(body.foodIntake.itens.length).toBe(3)
        expect(body.foodIntake.total).toBe(12)

        expect(body.mood.itens.length).toBe(3)
        expect(body.mood.total).toBe(13)

      })
    done()
  })
})
