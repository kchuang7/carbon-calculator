import * as React from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ChakraProvider, theme } from '@chakra-ui/react'

const AllProviders = ({ children }: { children?: React.ReactNode }): JSX.Element => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllProviders, ...options })

export { customRender as render }
