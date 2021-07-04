import { screen } from '@testing-library/react'
import LoginView from '../../../views/Login'
import { render } from '../../utils/Provider'

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
})
