import React, { useState } from 'react'
import {
  ChakraProvider,
  Box,
  theme
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
// components
import Main from './components/Main'
// types
import UsageValuesType from './types/UsageValuesType'

function App (): JSX.Element {
  const [usageValues, setUsageValues] = useState<UsageValuesType>({
    electricity: '',
    naturalGas: '',
    fuelOil: '',
    lfg: '',
    waste: '',
    water: ''
  })

  return (
    <ChakraProvider theme={theme}>
      <Box p='4' textAlign='right' fontSize='xl'>
        <ColorModeSwitcher justifySelf='flex-end' />
      </Box>
      <Main
        usageValues={usageValues}
        setUsageValues={setUsageValues}
      />
    </ChakraProvider>
  )
}

export default App
