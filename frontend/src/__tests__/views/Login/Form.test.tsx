import { fireEvent } from '@testing-library/react'
import { render } from '../../utils/Provider'
import Form from '../../../views/Login/Form'
import theme from '../../../styles/theme'

const makeSUT = () => {
  const utils = render(<Form />)
  const input = utils.getByLabelText('care-recipient-id', {
    selector: 'input'
  }) as HTMLInputElement
  const submitButton = utils.getByRole('button')
  return {
    utils,
    input,
    submitButton
  }
}

describe('<Form>', () => {
  it('Should render <Form/> correctly', () => {
    const { input, submitButton } = makeSUT()
    expect(input).toBeInTheDocument()

    expect(submitButton).toBeInTheDocument()
  })

  it('Should to fill input with some value', () => {
    const { input } = makeSUT()

    const value = 'abc123'
    fireEvent.change(input, { target: { value } })

    expect(input.value).toBe(value)
  })

  it('Should present submit button as disabled if input has no value', () => {
    const { submitButton } = makeSUT()

    expect(submitButton).toBeDisabled()
    expect(submitButton).toHaveStyle(
      `background-color: ${theme.colors.accent}60`
    )
  })

  it('Should present submit button as enabled if input has value', () => {
    const { submitButton, input } = makeSUT()

    const value = 'abc123'
    fireEvent.change(input, { target: { value } })

    expect(submitButton).toBeEnabled()
    expect(submitButton).toHaveStyle(`background-color: ${theme.colors.accent}`)
  })
})
