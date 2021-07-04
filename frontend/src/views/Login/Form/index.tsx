import { useState } from 'react'
import * as S from './styles'

const Form = () => {
  const [careRecipientId, setCareRecipienttId] = useState('')
  const [formValid, setFormValid] = useState(false)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setCareRecipienttId(value)
    setFormValid(value.length > 0)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
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
          disabled={!formValid}
        >
          Enter
        </S.Button>
      </S.Form>
      <S.Image alt="" src="/assets/images/hands-we-care.svg" />
    </S.Container>
  )
}

export default Form
