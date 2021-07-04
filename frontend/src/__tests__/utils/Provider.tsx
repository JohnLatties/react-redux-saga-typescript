import React from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import StyleProvider from '../../styles'

interface ProviderProps {
  children: JSX.Element
}

const AllTheProviders = ({ children }: ProviderProps) => {
  return (
    <StyleProvider>
      <>{children} </>
    </StyleProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult =>
  render(ui, { wrapper: AllTheProviders as React.ComponentType, ...options })

export { customRender as render }
