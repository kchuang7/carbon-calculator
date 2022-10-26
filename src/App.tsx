import React, { useState } from 'react'
import {
  ChakraProvider,
  Box,
  Flex,
  theme
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
// components
import Main from './components/Main'
import Emissions from './components/Emissions'
// types
import UsageValuesType from './types/UsageValuesType'
import EmissionsType from './types/EmissionsType'

/**
 * Parent component containing entire carbon calculator app via composition pattern.
 *
 * @component
 * @return {React.ReactElement} carbon calculator.
 */
function App (): JSX.Element {
  const [usageValues, setUsageValues] = useState<UsageValuesType>({
    electricity: '',
    naturalGas: '',
    fuelOil: '',
    lfg: '',
    waste: '',
    water: '',
    vehicle: '',
    bus: '',
    metro: '',
    taxi: '',
    rail: '',
    flying: ''
  })
  const [emissions, setEmissions] = useState<EmissionsType>({
    electricity: 0,
    naturalGas: 0,
    fuelOil: 0,
    lfg: 0,
    waste: 0,
    water: 0,
    vehicle: 0,
    bus: 0,
    metro: 0,
    taxi: 0,
    rail: 0,
    flying: 0
  })

  return (
    <ChakraProvider theme={theme}>
      <Box p='4' textAlign='right' fontSize='xl'>
        <ColorModeSwitcher justifySelf='flex-end' />
      </Box>
      <Flex w='100%' justify='center' direction='row'>
        <Main
          usageValues={usageValues}
          setUsageValues={setUsageValues}
          emissions={emissions}
          setEmissions={setEmissions}
        />
        <Emissions emissions={emissions} />
      </Flex>
    </ChakraProvider>
  )
}

export default App
