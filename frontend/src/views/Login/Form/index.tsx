import { useEffect, useState } from 'react'
import { getCareRecipient } from '../../../app/careRecipient/actions'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import * as S from './styles'

const Form = () => {
  const [careRecipientId, setCareRecipienttId] = useState('')
  const [canSubmit, setCanSubmit] = useState(false)
  const [showError, setShowError] = useState(false)
  const { loading, failed } = useAppSelector((state) => state.careRecipente)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setShowError(failed)
  }, [failed])

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setCareRecipienttId(value)
    setCanSubmit(value.length > 0)
    setShowError(false)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setCanSubmit(false)
    dispatch(getCareRecipient(careRecipientId))
    setShowError(true)
  }

  return (
    <S.Container>
      <S.Form
        role="form"
        aria-label="Login with care recipient id"
        onSubmit={handleSubmit}
      >
        <div>
          <label hidden id="care-recipient-id">
            Care Recipient Id
          </label>
          <S.Input
            aria-label="care-recipient-id"
            value={careRecipientId}
            placeholder="Care recipient"
            onChange={handleInputChange}
          />
        </div>
        <S.Button
          aria-label="Enter with Care recipient id"
          type="submit"
          disabled={!canSubmit}
        >
          {loading ? '...' : 'Enter'}
        </S.Button>
      </S.Form>
      <S.ErroArea>
        {failed && showError && (
          <S.ErroText>Invalid care recipient id</S.ErroText>
        )}
      </S.ErroArea>
      <S.Image alt="" src="/assets/images/hands-we-care.svg" />
    </S.Container>
  )
}

export default Form
