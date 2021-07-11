import React from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import StyleProvider from '../../styles'
import { Provider } from 'react-redux'
import store from '../../app/store'

interface ProviderProps {
  children: JSX.Element
}

const AllTheProviders = ({ children }: ProviderProps) => {
  return (
    <Provider store={store}>
      <StyleProvider>
        <>{children} </>
      </StyleProvider>
    </Provider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult =>
  render(ui, { wrapper: AllTheProviders as React.ComponentType, ...options })

export { customRender as render }
