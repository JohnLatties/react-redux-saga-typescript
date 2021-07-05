import { ICareRecipientRepository } from '../CareRecipientRepository'

const careRecipientIds = [
  {id: 'e3e2bff8-qwer-ewerq'},
  {id: 'e3e2bff8-d318-4760-beea-841a75f00227'},
  {id: 'df50cac5-293c-490d-a06c-ee26796f850d'},
  {id: 'ad3512a6-91b1-4d7d-a005-6f8764dd0111'}
]

async function getById(careRecipientId: string) {
  return careRecipientIds.find(i => i.id === careRecipientId) || null
}

function CareRecipientRepository (): ICareRecipientRepository  {
  return {
    getById
  }
}

export default CareRecipientRepository
