import React, { ChangeEvent } from 'react'
import axios from 'axios'
import {
  Flex,
  Input
} from '@chakra-ui/react'
// types
import UsageValuesType from '../../types/UsageValuesType'
import MainPropTypes from '../../types/MainPropTypes'

interface InputType {
  label: string
  placeholder: string
  valueName: string
}

const HOUSING_INPUTS: InputType[] = [
  {
    label: 'Electricity',
    placeholder: 'Usage in kWh/mo',
    valueName: 'electricity'
  },
  {
    label: 'Natural Gas',
    placeholder: 'Usage in therm/mo',
    valueName: 'naturalGas'
  },
  {
    label: 'Fuel Oil',
    placeholder: 'Usage in US gallon/mo',
    valueName: 'fuelOil'
  },
  {
    label: 'Propane',
    placeholder: 'Usage in US gallon/mo',
    valueName: 'lfg'
  },
  {
    label: 'Waste',
    placeholder: 'Number of residents',
    valueName: 'waste'
  },
  {
    label: 'Water',
    placeholder: 'Usage in US gallon/mo',
    valueName: 'water'
  }
]

function Housing ({ usageValues, setUsageValues }: MainPropTypes): JSX.Element {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>, valueName: string): void => {
    const value: string = target.value
    axios.get(`/emissions/housing/${valueName}?usage=${value}`)
      .then((): void => {
        setUsageValues((prev: UsageValuesType): UsageValuesType => ({
          ...prev,
          [valueName]: isNaN(Number(value))
            ? prev[valueName]
            : value
        }))
      })
      .catch(console.error)
  } // end handleChange

  return (
    <Flex w='100%' p='4' align="center" justify="center" direction="column">
      {
        HOUSING_INPUTS.map((subcategory: InputType): JSX.Element => (
          <React.Fragment key={subcategory.label}>
            {subcategory.label}
            <Input
              autoComplete='new-password'
              placeholder={subcategory.placeholder}
              value={usageValues[subcategory.valueName]}
              onChange={(e) => handleChange(e, subcategory.valueName)}
            />
          </React.Fragment>
        ))
      }
    </Flex>
  )
}

export default Housing
