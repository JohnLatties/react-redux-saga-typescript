import { Router } from 'express'
import CareRecipientController from '../../../controller/CareRecipientController'
import MainObservationsController from '../../../controller/MainObservationsController'
import MoodEventsController from '../../../controller/MoodEventsController'
import { adaptRoute } from '../../adapters/routesAdapter'

export default (router: Router) => {
  router.get('/care-recipients/:id', adaptRoute(CareRecipientController()))
  router.get('/care-recipients/:id/main-observations', adaptRoute(MainObservationsController()))
  router.get('/care-recipients/:id/mood-events', adaptRoute(MoodEventsController()))
}
