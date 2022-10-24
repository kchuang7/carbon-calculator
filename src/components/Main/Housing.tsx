import React, { ChangeEvent } from 'react'
import axios from 'axios'
import {
  Box,
  Flex,
  FormLabel,
  Text,
  Input
} from '@chakra-ui/react'
// types
import UsageValuesType from '../../types/UsageValuesType'
import MainPropTypes from '../../types/MainPropTypes'

interface InputType {
  label: string
  valueName: string
}

const HOUSING_INPUTS: InputType[] = [
  {
    label: 'Electricity (kWh/mo)',
    valueName: 'electricity'
  },
  {
    label: 'Natural Gas (therm/mo)',
    valueName: 'naturalGas'
  },
  {
    label: 'Fuel Oil (US gallon/mo)',
    valueName: 'fuelOil'
  },
  {
    label: 'Propane (US gallon/mo)',
    valueName: 'lfg'
  },
  {
    label: 'Waste (number of residents)',
    valueName: 'waste'
  },
  {
    label: 'Water (US gallon/mo)',
    valueName: 'water'
  }
]

function Housing ({ usageValues, setUsageValues }: MainPropTypes): JSX.Element {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>, valueName: string): void => {
    const value: string = target.value

    // only make web request if parsed input is number
    if (!isNaN(Number(value))) {
      axios.get(`/emissions/housing/${valueName}?usage=${value}`)
        .then(({ data }): void => {
          console.log(data)
          setUsageValues((prev: UsageValuesType): UsageValuesType => ({
            ...prev,
            [valueName]: value
          }))
        })
        .catch(console.error)
    } // end if
  } // end handleChange

  return (
    <Flex w='50%' align="left" justify="center" direction="column">
      {
        HOUSING_INPUTS.map((subcategory: InputType): JSX.Element => (
          <Box key={subcategory.label} my='2'>
            <FormLabel>
              <Text mb='2'>{subcategory.label}</Text>
              <Input
                autoComplete='new-password'
                value={usageValues[subcategory.valueName]}
                onChange={(e) => handleChange(e, subcategory.valueName)}
              />
            </FormLabel>
          </Box>
        ))
      }
    </Flex>
  )
}

export default Housing
