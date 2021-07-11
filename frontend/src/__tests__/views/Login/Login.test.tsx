import { act, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginView from '../../../views/Login'
import { caraRecipient } from '../../utils/mocks'
import { render } from '../../utils/Provider'

function sleep(milisedunds = 200) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, milisedunds)
  })
}

describe('Login view', () => {
  it('Should render <LoginView/> correctly', () => {
    render(<LoginView />)

    expect(screen.getByRole('header')).toBeInTheDocument()
    expect(screen.getByText('Family Platform')).toBeInTheDocument()
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
    expect(form.getElementsByTagName('input').length).toBe(1)
    expect(form.getElementsByTagName('button').length).toBe(1)
  })

  it('Should validate if care recipiente id is invalid', async () => {
    const utils = render(<LoginView />)
    const input = utils.getByLabelText('care-recipient-id', {
      selector: 'input'
    }) as HTMLInputElement
    const submitButton = utils.getByRole('button')

    const value = caraRecipient.invalidId
    fireEvent.change(input, { target: { value } })

    await act(async () => {
      userEvent.click(submitButton)
      await sleep()
    })

    expect(
      await utils.getByText('Invalid care recipient id')
    ).toBeInTheDocument()
  })
})
