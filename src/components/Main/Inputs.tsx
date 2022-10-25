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
import EmissionsType from '../../types/EmissionsType'
import MainPropTypes from '../../types/MainPropTypes'

interface InputType {
  label: string
  valueName: string
}

interface PropTypes extends MainPropTypes {
  category: string
}

const INPUTS: { [key: string]: InputType[] } = {
  housing: [
    { label: 'Electricity (kWh/mo)', valueName: 'electricity' },
    { label: 'Natural Gas (therm/mo)', valueName: 'naturalGas' },
    { label: 'Fuel Oil (US gallon/mo)', valueName: 'fuelOil' },
    { label: 'Propane (US gallon/mo)', valueName: 'lfg' },
    { label: 'Waste (number of residents)', valueName: 'waste' },
    { label: 'Water (US gallon/mo)', valueName: 'water' }
  ],
  travel: [
    { label: 'Vehicle (miles/year)', valueName: 'vehicle' },
    { label: 'Bus (miles/year)', valueName: 'bus' },
    { label: 'Metro (miles/year)', valueName: 'metro' },
    { label: 'Taxi (miles/year)', valueName: 'taxi' },
    { label: 'Rail (miles/year)', valueName: 'rail' },
    { label: 'Flying (miles/year)', valueName: 'flying' }
  ]
}

function Inputs ({ category, usageValues, setUsageValues, setEmissions }: PropTypes): JSX.Element {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>, valueName: string): void => {
    const value: string = target.value

    // only make web request if parsed input is number
    if (!isNaN(Number(value))) {
      axios.get(`/emissions/${category}/${valueName}?usage=${value}`)
        .then(({ data }): void => {
          // update input
          setUsageValues((prev: UsageValuesType): UsageValuesType => ({
            ...prev,
            [valueName]: value
          }))
          // update emissions value
          setEmissions((prev: EmissionsType): EmissionsType => ({
            ...prev,
            [valueName]: data.emissionsPerYear
          }))
        })
        .catch(console.error)
    } // end if
  } // end handleChange

  return (
    <Flex align="left" justify="center" direction="column">
      {
        INPUTS[category].map((subcategory: InputType): JSX.Element => (
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

export default Inputs
