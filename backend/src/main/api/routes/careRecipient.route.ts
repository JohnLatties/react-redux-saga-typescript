import { Router } from 'express'
import CareRecipientController from '../../../controller/CareRecipientController'
import { adaptRoute } from '../../adapters/routesAdapter'

export default (router: Router) => {
  router.get('/care-recipients/:id', adaptRoute(CareRecipientController()))
}
